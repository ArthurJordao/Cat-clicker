var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.level = ko.computed(function () {
        if (this.clickCount() < 10) {
            return 'newborn';
        }
        if (this.clickCount() < 13) {
            return 'infant';
        }
        if (this.clickCount() < 19) {
            return 'teen';
        }
        return 'adult';
    }, this);
    this.nicknames = ko.observableArray(['mr. Cuddly', 'cutie']);
}

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };


}
ko.applyBindings(new ViewModel());