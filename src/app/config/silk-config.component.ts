import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const SKU_DKU_SEPARATOR = ';';
const SKU_POSITION = 0;
const DKU_POSITION = 1;

@Component({
  selector: 'app-silk-config',
  templateUrl: './silk-config.component.html',
  styleUrls: ['./silk-config.component.css']
})

export class SilkConfigComponent implements OnInit {

  fragment: string;
  sku: string;
  dku: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fragment = this.route.snapshot.fragment;
    const fragmentParams: string[] = this.fragment.split(SKU_DKU_SEPARATOR);
    this.sku = fragmentParams[SKU_POSITION];
    this.dku = fragmentParams[DKU_POSITION];
  }

}
