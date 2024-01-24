// Создаем прототип электроприбора
function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Метод для включения устройства
ElectricDevice.prototype.plugIn = function() {
  this.pluggedIn = true;
  console.log(this.name + ' включен');
}

// Метод для выключения устройства
ElectricDevice.prototype.unplug = function() {
  this.pluggedIn = false;
  console.log(this.name + ' выключен');
}

// Создаем прототип для умной розетки
function SmartSocket(devices) {
  this.devices = devices;
}

// Метод для подсчета потребляемой мощности
SmartSocket.prototype.calculatePower = function() {
  let totalPower = 0;
  this.devices.forEach(function(device) {
    if (device.pluggedIn) {
      totalPower += device.power;
    }
  });
  console.log('Потребляемая мощность: ' + totalPower + ' Вт');
}

// Создаем объекты для различных электроприборов
const laptop = new ElectricDevice('Ноутбук', 60);
const lamp = new ElectricDevice('Лампа', 40);
const kettle = new ElectricDevice('Чайник', 1500);

// Включаем устройства
laptop.plugIn();
lamp.plugIn();
// kettle.plugIn();

// Создаем умную розетку и подключаем устройства
const smartSocket = new SmartSocket([laptop, lamp, kettle]);

// Подсчитываем потребляемую мощность
smartSocket.calculatePower();