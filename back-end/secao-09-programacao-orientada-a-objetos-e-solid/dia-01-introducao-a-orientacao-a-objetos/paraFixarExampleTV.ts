class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Welcome to tv ${brand}`);

    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(`brand: ${this.brand}`);
    console.log(`size: ${this.size}`);
    console.log(`resolution: ${this.resolution}`);
    console.log(`connections: ${this.connections}`);
  }
};

const tv2 = new Tv('philips', 58, '1260', ['hdmi', 'avi']);

tv2.turnOn();
