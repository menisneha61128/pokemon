import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], searchText: string): any {
    if (!arr) return [];
    if (!searchText) return arr;
    searchText = searchText.toLowerCase();
    return arr.filter((item) => {
      // item[fieldName].toLowerCase().includes(searchText)
      return JSON.stringify(item).toLowerCase().includes(searchText);
      return null;
    });
  }
}
