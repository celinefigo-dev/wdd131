let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() != '') {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = "❌";

        deleteButton.addEventListener('click', function () {
            if (confirm("Are you sure you want to delete this item?")) {
                list.removeChild(li);
                input.focus();
            }
        });

        li.append(deleteButton);
        list.append(li);

        // Clear input after adding
        input.value = '';

        // Focus back on input
        input.focus();
    } else {
        alert("Please enter a value.");
    }
});


