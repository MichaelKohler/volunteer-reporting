import {Component} from '@angular/core';
import {ReportService} from '../../services/report.service';

@Component({
  selector: 'fountain-app',
  template: require('./list.html'),
  providers: [ReportService]
})

export class ReportsComponent {
  constructor(_reportService: ReportService) {
    this.reports = _reportService.getReports();
    console.log(this.reports);
  }
}
