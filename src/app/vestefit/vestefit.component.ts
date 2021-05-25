import { VestefitService } from './vestefit.service';
import { Component, OnInit } from '@angular/core';
import { Mercadoria } from './mercadoria/mercadoria.model';

@Component({
  selector: 'app-vestefit',
  templateUrl: './vestefit.component.html',
  styleUrls: ['./vestefit.component.css']
})
export class VestefitComponent implements OnInit {

  vestefit: Mercadoria[];

  constructor(private vestefitService: VestefitService) { }

  ngOnInit(): void {
    this.vestefit = this.vestefitService.vestefit();
  }

}
