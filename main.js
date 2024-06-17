$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();

        const taskName = $('#task-input').val().trim();
        if (taskName) {
            const newTask = $('<li></li>').text(taskName);
            $('#task-list').append(newTask);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

