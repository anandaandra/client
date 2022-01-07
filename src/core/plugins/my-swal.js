import Swal from "sweetalert2";

function successAlert(message) {
  Swal.fire({
    title: "",
    text: message || "Success",
    icon: "success",
    confirmButtonClass: "btn btn-secondary",
    heightAuto: false
  });
}

function errorAlert(message) {
  Swal.fire({
    title: "",
    text: message || "Something went wrong",
    icon: "error",
    confirmButtonClass: "btn btn-secondary",
    heightAuto: false
  });
}

export { successAlert, errorAlert, Swal };
