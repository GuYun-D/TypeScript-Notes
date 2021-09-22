/**
 * type用来声明类型别名
 */
type UnionType = number | string | boolean

type PointType = {
  x: number,
  y: number,
  z?: number
}

function logId(id: UnionType){

}

function logPoint(point: PointType){
  
}