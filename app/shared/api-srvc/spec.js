describe('ApiSrvc', function() {

    var ApiSrvc;

    beforeEach(function(){

        angular.mock.module(require('.'));

        inject(function(_ApiSrvc_) {
            ApiSrvc = _ApiSrvc_;
        });

    });

    it('has GET function', function(){

        // Is defined
        expect(ApiSrvc.get).not.toBeNull();
        
        // Is of type function
        expect(typeof ApiSrvc.get).toEqual('function');

        // Returns a promise
        expect(ApiSrvc.get().then).not.toBeNull();

    });

});