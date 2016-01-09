class Homepage {
    constructor(headContent, managerShips) {
        // Reset the title.
        headContent.resetTitle();
    }
}

Homepage.$inject = ['headContent', 'managerShips'];

export default Homepage;