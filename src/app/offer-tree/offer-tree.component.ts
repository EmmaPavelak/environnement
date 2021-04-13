import { Component, OnInit } from '@angular/core';
import { TreesService } from '../trees/trees.service';

@Component({
  selector: 'app-offer-tree',
  templateUrl: './offer-tree.component.html',
  styleUrls: ['./offer-tree.component.scss']
})
export class OfferTreeComponent implements OnInit {

  trees:any;
  constructor(private treeService: TreesService) { }

  ngOnInit(): void {
    this.getTrees();
  }
  getTrees(){
    this.treeService.getAllTrees().subscribe(
      res => {
        this.trees=res;
        console.log(res);
      },
      err => {

        console.log('Error occured:' , err);

      }
    );
  }
}
