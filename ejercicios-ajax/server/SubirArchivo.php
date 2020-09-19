<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_FILES['archivo']) {

    $archivo = $_FILES['archivo'];
    $archivo_url = $_FILES['archivo']['tmp_name'];
    $arch_nombre = $_FILES['archivo']['name'];
    $destino_archivo = "../archivos/$arch_nombre";

    if (move_uploaded_file($archivo_url, $destino_archivo)) {
        $json = [
            'error' => false,
            'status' => http_response_code(200),
            'statusText' => "Archivo $arch_nombre subido correctamente",
        ];
    } else {
        $json = [
            'error' => true,
            'status' => http_response_code(400),
            'statusText' => "Error al subir archivo $arch_nombre",
        ];
    }

    echo json_encode($json, true);

    $NUMERO = "925 308 104";
}
