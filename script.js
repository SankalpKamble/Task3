document.addEventListener("DOMContentLoaded", function () {
    const allBtn = document.getElementById('all');
    const breakfastBtn = document.getElementById('breakfast');
    const lunchBtn = document.getElementById('lunch');
    const shakesBtn = document.getElementById('shakes');
    const dinnerBtn = document.getElementById('dinner');
    const dessert = document.getElementById('dessert');
   
    const items = document.querySelectorAll('.item');

    function showAllItems() {
        items.forEach(item => {
            item.style.display = 'block';
        });
    }

    function filterItems(category) {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    allBtn.addEventListener('click', () => {
        showAllItems();
    });

    breakfastBtn.addEventListener('click', () => {
        filterItems('breakfast');
    });

    lunchBtn.addEventListener('click', () => {
        filterItems('lunch');
    });

    shakesBtn.addEventListener('click', () => {
        filterItems('shakes');
    });

    dinnerBtn.addEventListener('click', () => {
        filterItems('dinner');
    });
    dessert.addEventListener('click', () => {
        filterItems('sweet');
    });
});
