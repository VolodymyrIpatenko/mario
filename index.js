// Змінні для збереження списку сфер, які ми малюємо
let spheres = [];

// Ця функція завантажує зображення перед запуском програми.
// ВАЖЛИВО: Переконайтеся, що ви завантажили файл "mario.webp"
// у папку "assets" вашого проєкту.
function preload() {
  // img = loadImage('assets/mario.webp');
}

// Ця функція запускається один раз на початку
function setup() {
  // Створюємо 3D-полотно у режимі WEBGL
  createCanvas(windowWidth, windowHeight, WEBGL);
}

// Ця функція запускається багато разів на секунду
function draw() {
  // Заповнюємо фон сірим кольором
  background(200);

  // Додаємо світло, щоб бачити об'єкти
  pointLight(255, 255, 255, 0, 0, 0);

  // Дозволяємо обертати камеру за рухом миші
  orbitControl();

  // Логіка малювання 3D-сфер
  if (mouseIsPressed) {
    let newX = map(mouseX, 0, width, -width / 2, width / 2);
    let newY = map(mouseY, 0, height, -height / 2, height / 2);
    spheres.push({ x: newX, y: newY, z: 0 });
  }

  // Малюємо всі збережені сфери
  for (let i = 0; i < spheres.length; i++) {
    push();
    translate(spheres[i].x, spheres[i].y, spheres[i].z);
    fill(255, 0, 0); // Колір сфери
    sphere(5); // Розмір сфери
    pop();
  }
}

// Це важливо для адаптації, щоб полотно займало весь екран
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

