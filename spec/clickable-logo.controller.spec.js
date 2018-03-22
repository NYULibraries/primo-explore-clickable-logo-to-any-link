let viewName = "TEST";
let clickableLogoLinkConfig = {
  url: '{urls.library}',
  altText: 'My Institution'
};

describe('clickableLogoToAnyLinkController with plain text config', () => {

  let $scope, $filter, $componentController;

  beforeEach(module(
    'clickableLogoToAnyLink',
    ($provide) => {
      $provide.constant("clickableLogoLinkConfig", clickableLogoLinkConfig);
      $provide.value("translateFilter", (original) => original + "!");
    })
  );

  beforeEach(inject(function(_$rootScope_, _$filter_, _$componentController_) {
    $componentController = _$componentController_;
    $scope = _$rootScope_;
    $filter = _$filter_;

    const parentCtrl = { iconLink: 'http://example.com' };
    const bindings = { parentCtrl };
    const ctrl = $componentController('prmLogoAfter', { $scope }, bindings);
    ctrl.$onInit();
  }));

  describe('config properties', () => {
    it('should assign logo link to scope', () => {
      expect($scope.clickableLogoLink).toEqual(clickableLogoLinkConfig.url);
    });

    it('should assign logo altText to scope', () => {
      expect($scope.clickableLogoAlt).toEqual(clickableLogoLinkConfig.altText);
    });

    it('should assign iconLink from bound parent controller property', () => {
      expect($scope.iconLink).toEqual('http://example.com');
    });
  });

  describe('translate', () => {
    it('should pass through text not in curly braces', () => {
      expect($scope.translate('My Value')).toEqual("My Value");
    });
    it('should translate text within curly braces', () => {
      expect($scope.translate('My {CONFIG_VALUE} value')).toEqual("My CONFIG_VALUE! value");
    });
  });
});
