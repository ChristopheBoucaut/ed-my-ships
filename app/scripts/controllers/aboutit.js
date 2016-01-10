class aboutit {
    constructor($translate, headContent) {
        $translate('header.title.aboutit').then(function (title) {
            headContent.setAdditionnalTitle(title);
        });
    }
}

aboutit.$inject = ['$translate', 'headContent'];

export default aboutit;