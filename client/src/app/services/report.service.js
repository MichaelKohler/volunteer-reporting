import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ReportService {
  constructor(_http: Http) {
    this.http = _http;
    this.baseUrl = 'localhost:3000/reports';
  }

  getReports() {
    console.log(this.http);
    const test = this.http.get(this.baseUrl)
    .map(res => res.json());
    console.log(test);
    return ['foo', 'bar', 'baz'];
  }
}
