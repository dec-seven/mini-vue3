/*
 * @Date: 2022-10-18 22:50:03
 * @LastEditTime: 2022-10-20 15:09:50
 * @Description: 
 */
import { track, trigger } from './effect'


/**
 * 返回一个对象的响应式代理
 * @param raw 
 * @returns 
 */
export function reactive(raw){
  
  return new Proxy(raw,{
    get(target, key){
      // {foo:1}
      // foo
      const res = Reflect.get(target,key);

      //依赖收集
      track(target,key)
      return res
    },
    set(target,key,value){
      const res = Reflect.set(target,key,value)

      //触发依赖
      trigger(target, key);
      return res 
    }
  })
}