import { Pipe, PipeTransform } from '@angular/core';
// Pre pare pipe for sorting data of date collumn
@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {
  transform(records: Array<any>, args?: any): any {
    return records.sort(function(a, b) {
          if (a[args.property] < b[args.property]) {
            return -1 * args.direction;
          } else if ( a[args.property] > b[args.property]){
            return 1 * args.direction;
          } else {
            return 0;
          }
        });
    }
}
