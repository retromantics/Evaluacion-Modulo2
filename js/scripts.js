$(document).ready(function () {

    // Validación del formulario 
    $('#contactoForm').on('submit', function (e) {
        e.preventDefault();

        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensaje').val().trim();

        let valido = true;

        if (nombre.length < 3) {
            $('#nombre').addClass('is-invalid');
            valido = false;
        } else {
            $('#nombre').removeClass('is-invalid');
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            $('#email').addClass('is-invalid');
            valido = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        if (mensaje.length < 10) {
            $('#mensaje').addClass('is-invalid');
            valido = false;
        } else {
            $('#mensaje').removeClass('is-invalid');
        }

        if (valido) {
            $('#formSuccess').removeClass('d-none');
            this.reset();
            $('.form-control').removeClass('is-invalid');
        } else {
            $('#formSuccess').addClass('d-none');
        }
    });

    // Validacion Test
    $('#formTestSeguridad').on('submit', function (e) {
        e.preventDefault();
        let score = 0;
        if ($('input[name="p1"]:checked').val() === 'a') score++;
        if ($('input[name="p2"]:checked').val() === 'a') score++;
        if ($('input[name="p3"]:checked').val() === 'a') score++;
        let mensaje = '';
        if (score === 3) mensaje = '¡Excelente! Tienes muy buenas prácticas de seguridad.';
        else if (score >= 2) mensaje = '¡Bien! Pero puedes mejorar tus hábitos de seguridad.';
        else mensaje = 'Atención: deberías mejorar tus prácticas de seguridad digital.';
        $('#testResult').removeClass('d-none').text(mensaje);
    });
    $('#modalTestSeguridad').on('hidden.bs.modal', function () {
        $('#formTestSeguridad')[0].reset();
        $('#testResult').addClass('d-none').text('');
    });
});
