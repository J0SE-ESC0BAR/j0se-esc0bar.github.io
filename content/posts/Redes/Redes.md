---
title: "Administración y Resolución de Problemas en Windows y Linux"
date: 2025-02-25T10:00:00-06:00
description: "Guía esencial para la administración y solución de problemas en Windows y Linux. Aprende a gestionar procesos, configurar redes y optimizar el rendimiento con comandos clave."
image: images/fixes-win-linux.png
draft: false
---
# Administración y Resolución de Problemas en Windows y Linux

Esta guía te ayudará a comprender conceptos básicos de administración y troubleshooting en estos sistemas operativos. Aquí aprenderás a manejar procesos, servicios, redes y más.

## 🔹 Windows

### Reiniciar un Servicio

Existen dos métodos principales:

#### CMD:

```cmd
net stop NombreDelServicio
net start NombreDelServicio
```

#### PowerShell:

```powershell
Restart-Service -Name NombreDelServicio
```

### Gestión de Procesos y Rendimiento

- **Listar procesos:**
  ```cmd
  tasklist
  ```
- **Finalizar procesos con alto consumo de CPU:**
  ```cmd
  taskkill /PID <Número_PID> /F
  ```
- **Ver conexiones de red:**
  ```cmd
  netstat -an
  ```
- **Información de red:**
  ```cmd
  ipconfig /all
  ```

### Otros Comandos Útiles

- **Información del sistema:**
  ```cmd
  systeminfo
  ```
- **Apagar o reiniciar el sistema:**
  ```cmd
  shutdown /r /t 0
  ```

---

## 🔹 Linux

### Monitoreo de Procesos y Recursos

- **Visualizar procesos en tiempo real:**

  ```bash
  top
  ```
- **Alternativa con interfaz mejorada (requiere instalación):**

  ```bash
  htop
  ```
- **Listar procesos en ejecución:**

  ```bash
  ps aux
  ```

### Gestión de Servicios

- **Con `systemctl` (para sistemas modernos):**
  ```bash
  sudo systemctl restart nombre_del_servicio
  ```
- **Con `service` (sistemas más antiguos):**
  ```bash
  sudo service nombre_del_servicio restart
  ```

### Configuración de Red

- **Ver configuración de interfaces:**

  ```bash
  ip addr show
  ```

  (Alternativa en sistemas más antiguos: `ifconfig`)
- **Configurar IP estática en Netplan (Ubuntu moderno):**

  ```yaml
  network:
    version: 2
    renderer: networkd
    ethernets:
      enp3s0:
        addresses: [192.168.1.100/24]
        gateway4: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 8.8.4.4]
  ```

  Aplicar cambios con:

  ```bash
  sudo netplan apply
  ```

### Otros Comandos Importantes

- **Ver uso de disco:**
  ```bash
  df -h
  ```
- **Mostrar estadísticas del sistema:**
  ```bash
  vmstat 5
  ```
- **Uso del espacio en disco por directorios:**
  ```bash
  du -sh /ruta/del/directorio
  ```

---

- **Automatiza tareas:** Puedes usar scripts en batch o shell para ejecutar múltiples comandos de forma eficiente.

