/*
 * @Date: 2022-10-18 22:55:50
 * @LastEditTime: 2022-10-18 23:39:17
 * @Description: 
 */

class ReactiveEffect{
  private _fn: any ;
  
  constructor(fn){
    this._fn = fn
  }

  run(){
    activeEffect = this
    this._fn()
  }
}

const targetMap = new Map()
export function track(target,key){
  // target -> key -> dep
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target,depsMap)
  }

  let dep = depsMap.get(key)
  depsMap.set(key,dep)
  if(!dep){
    dep = new Set()
    depsMap.set(key,dep)
  }

  dep.add(activeEffect);
}

export function trigger(target, key){
  let depsMap = targetMap.get(target)
  let dep = depsMap.get(key)

  for (const effect of dep) {
    effect.run()
  }
}

let activeEffect;
export function effect(fn){

  const _effect = new ReactiveEffect(fn);

  _effect.run()
}