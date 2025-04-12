import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMetaValue'
})
export class FormatMetaValuePipe implements PipeTransform {

  transform(name: string, datas: any[]): any {
    let dataArr=datas.filter((elt:any)=> elt.name === name)
    if(dataArr.length){
      let data=dataArr[0]
      return data.value
    }
    return null;
  }

}
