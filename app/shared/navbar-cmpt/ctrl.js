module.exports = ['ApiSrvc', '$location', function(ApiSrvc, $location){

    // All properties of '$ctrl' are exposed to template
    var $ctrl = this;

    $ctrl.data = {
        navLinkList: {
            
            left: [
                {
                    label: 'RyanNHG',
                    url: '/',
                    //img: '/static/images/blonde-emoji.png',
                    brand: true
                },
                {
                    label: 'Projects',
                    //icon: 'code',
                    url: '/projects',
                    disabled: true
                },
                {
                    label: 'Interests',
                    //icon: 'gamepad',
                    url: '/interests'
                },
                {
                    label: 'Experience',
                    //icon: 'briefcase',
                    url: '/experience'
                }
            ],

            right: [
                {
                    //label: 'Github',
                    icon: 'github',
                    url: 'https://github.com/ryannhg'
                }
            ]
        }
    };

    $ctrl.isCurrentPath = function(url){
        return $location.path() == url;
    }

}];