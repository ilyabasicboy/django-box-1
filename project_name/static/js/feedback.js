//Feedback Form
let  feedback = {
    submit: function($form) {
        let formURL = $form.attr('action');
        let data = new FormData();
        let form_array = $form.serializeArray();
        for (let i = 0; i < form_array.length; i++) {
            data.append(form_array[i].name, form_array[i].value);
        }
        $.ajax({
            url: formURL,
            data:  data,
            processData: false,
            contentType: false,
            method: 'POST',
            success: function(data) {
                $form.replaceWith(data).show();
            },
        });
        return false;
    }
};

//Ajax Send
$(document).on('submit', '.feedback-form', function(e) {
    e.preventDefault();
    feedback.submit($(this));
});