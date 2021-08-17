
import {MatTableModule , MatPaginatorModule,MatSortModule} from '@angular/material';
import { NgModule } from '@angular/core';  
import * as Material from '@angular/material'

@NgModule({
imports : [
    Material.MatPaginatorModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatFormFieldModule,
    Material.MatInputModule ,
    Material.MatMenuModule,
    Material.MatIconModule
],
exports : [
    Material.MatTableModule,
     Material.MatPaginatorModule,
     Material.MatSortModule,
     Material.MatFormFieldModule,
     Material.MatInputModule ,
     Material.MatMenuModule,
     Material.MatIconModule
]
})

export class MaterialModule {
    
}