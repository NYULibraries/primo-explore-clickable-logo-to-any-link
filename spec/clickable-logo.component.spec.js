const clickableLogoLinkConfig = __fixtures__['clickableLogoLinkConfig'];

describe('clickableLogoLink component', () => {
  beforeEach(module('clickableLogoToAnyLink', ($provide) => {
    $provide.constant("clickableLogoLinkConfig", clickableLogoLinkConfig);
    $provide.value("translateFilter", (original) => original + "!");
  }));

  let $compile, $rootScope
  let element;

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;


    const scope = $rootScope.$new();
    scope.parentCtrl = { iconLink: 'example.com'};
    element = angular.element(`<prm-logo-after parent-ctrl="parentCtrl" />`)
    element = $compile(element)(scope);
    scope.$digest();
  }));

  describe('template layout', () => {

    it('should have a styled div element at the top-level', () => {
      const children = element.children();
      const div = children[0];

      expect(div.tagName).toEqual('DIV');
      expect(children.length).toEqual(1);
      expect(div.className).toContain('product-logo product-logo-local');
    });

    it('should contain a single link', () => {
      const as = element.find('a')
      expect(as.length).toEqual(1);
    });

    it('link should contain an image', () => {
      const img = element.find('a')[0].querySelector('img');
      expect(img).toBeDefined();
    });
  });

});
