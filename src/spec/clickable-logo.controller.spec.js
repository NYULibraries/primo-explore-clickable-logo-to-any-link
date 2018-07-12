let clickableLogoLinkConfig;
beforeEach(() => {
  clickableLogoLinkConfig = __fixtures__['clickableLogoLinkConfig'];
});

describe('clickableLogoToAnyLinkController', () => {
  let $scope, $componentController, ctrl;
  beforeEach(module('clickableLogoToAnyLink', ($provide) => {
    $provide.constant("clickableLogoLinkConfig", clickableLogoLinkConfig);
    $provide.value("translateFilter", (original) => original + "!");
  }));

  beforeEach(inject(function(_$rootScope_, _$filter_, _$componentController_) {
    $componentController = _$componentController_;
    $scope = _$rootScope_;
    ctrl = $componentController('prmLogoAfter', { $scope });
  }));

  describe('config properties', () => {
    it('should assign logo link to scope', () => {
      expect($scope.clickableLogoLink).toEqual(clickableLogoLinkConfig.url);
    });

    it('should assign logo altText to scope', () => {
      expect($scope.clickableLogoAlt).toEqual(clickableLogoLinkConfig.altText);
    });
  });

  describe('$onInit', () => {
    beforeEach(() => {
      ctrl.$onInit();
    });

    it('should assign customIcon to scope\'s iconLink', () => {
      expect($scope.iconLink).toEqual('libraryicon.svg');
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

describe('without a specified iconLink', () => {
  let $scope, $componentController, ctrl;
  beforeEach(module('clickableLogoToAnyLink', ($provide) => {
    clickableLogoLinkConfig.iconLink = undefined;
    $provide.constant("clickableLogoLinkConfig", clickableLogoLinkConfig);
    $provide.value("translateFilter", (original) => original + "!");
  }));

  beforeEach(inject(function(_$rootScope_, _$filter_, _$componentController_) {
    $componentController = _$componentController_;
    $scope = _$rootScope_;

    const parentCtrl = { iconLink: 'http://example.com' };
    const bindings = { parentCtrl };

    ctrl = $componentController('prmLogoAfter', { $scope }, bindings);
  }));

  beforeEach(() => {
    ctrl.$onInit();
  });

  it('should assign parentCtrl.iconLink to scope', () => {
    expect($scope.iconLink).toEqual('http://example.com');
  });
});
