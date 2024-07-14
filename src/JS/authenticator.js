let userEmailLabel = document.getElementById("user_email_label");
let userNameLabel = document.getElementById("user_name_label");
let userMessageLabel = document.getElementById("user_message");
/**
 * @function Email authenticator
 * @returns Email request
 */
function sendEmail() {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let userEmail = document.getElementById("user_email").value;
    let userName = document.getElementById("user_name").value;
    let userMessage = document.getElementById("user_message").value;

    if (userEmail == "" || userName == "" || userMessage == "" || !emailRegex.test(userEmail)) {
        userEmailLabel.classList.add("input-error");
        userNameLabel.classList.add("input-error");
        userMessageLabel.classList.add("textarea-error");
    } else {
        userEmailLabel.classList.remove("input-error");
        userNameLabel.classList.remove("input-error");
        userMessageLabel.classList.remove("textarea-error");
        return;
    }
}