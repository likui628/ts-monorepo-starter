import { Injectable } from "@nestjs/common";
import { meaningOfLife } from "@likui628/foo";

@Injectable()
export class AppService {
  // eslint-disable-next-line class-methods-use-this
  getHello = (): string => `The meaning of life is: ${meaningOfLife}`;
}
