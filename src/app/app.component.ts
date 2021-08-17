import {AfterViewInit, Component, ViewChild, OnInit, AfterViewChecked, SimpleChange, OnChanges, SimpleChanges} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CommonServiceService } from './common-service.service';

export interface IUserData {
        gender : string;
        name : any;
        location : any;
        city : string;
        state : string;
        country : string;
        postcode : number;
        coordinates :any;
        timezone :any;
        email : string;
        login :any;
        username : string;
        password : string;
        salt : string;
        md5: string;
        sha1: string;
        sha256: string;
        dob : any;
        id:any;
        picture :any;
        medium : string;
        thumbnail : string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'dob', 'city', 'email','cell'];
  obj = <IUserData>{};
  dataSource : MatTableDataSource<IUserData> = new MatTableDataSource([this.obj]);
  numOfRecords : number = 200;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  @ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort , {static: false}) sort: MatSort;


// MatPaginator Inputs
  length = "";
  pageSize = 5;
  sortedData: any;
  constructor(public commonService : CommonServiceService) {
    
  
  }
  
  ngOnInit() {
    this.commonService.getUserData(this.numOfRecords).subscribe((res) => {
      this.dataSource = new MatTableDataSource<IUserData>(res.results);
      this.length = res.results.length
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
    },(error) => {
      console.log(error)
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;    
    this.dataSource.sort = this.sort;
  } 
  
  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'city': return this.compare(a.location.city, b.location.city, isAsc);
        case 'name': return this.compare((a.name.first + a.name.last), (b.name.first + b.name.last), isAsc);
        case 'dob': return this.compare(a.dob.date, b.dob.date, isAsc);
        default: return 0;
      }
    });

    this.dataSource= new MatTableDataSource(this.sortedData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(value) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
