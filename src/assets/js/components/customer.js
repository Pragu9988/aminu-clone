(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const forgetPasswordLink = document.querySelector(".forget-your-password");
    const cancelRecoverPasswordForm = document.querySelector(".cancel-recover");
    const recoverPasswordElement = document.getElementById("recover-password");
    const customerElement = document.getElementById("customer");

    if (forgetPasswordLink) {
      forgetPasswordLink.addEventListener("click", () => {
        showRecoverPasswordForm();
      });
    }

    if (cancelRecoverPasswordForm) {
      cancelRecoverPasswordForm.addEventListener("click", () => {
        hideRecoverPasswordForm();
      });
    }

    function showRecoverPasswordForm() {
      if (recoverPasswordElement && customerElement) {
        document.getElementById("recover-password").style.display = "block";
        document.getElementById("customer").style.display = "none";
      }
    }

    function hideRecoverPasswordForm() {
      if (recoverPasswordElement && customerElement) {
        document.getElementById("recover-password").style.display = "none";
        document.getElementById("customer").style.display = "block";
      }
    }
  });
})();
