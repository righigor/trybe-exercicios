class TV {
  brand: string;
  size: number;
  resulotion: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resulotion = r;
    this.connections = c;
  }

  turnOn() {
    console.log(
      `TV ${this.brand}, ${this.size}, resolution: ${this.resulotion} \n\ available connections: ${this.connections}`
    );
  }
}

const tv1 = new TV('Samsung', 32, '4K', ['HDMI', 'ETHERNET', 'WIFI']);
tv1.turnOn();