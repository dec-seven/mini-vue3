/*
 * @Date: 2022-10-18 22:47:44
 * @LastEditTime: 2022-10-20 22:36:10
 * @Description: 
 */
import { reactive } from '../reactive'

// 尽量每次编写测试用例都用describe包裹进行分块
// 每个测试用例一个it函数代表
// 参数：
// - 字符串，代表测试用例名称：常用命名模式“被测对象在什么情况下是什么行为”
// - 函数，实际测试用例过程

describe('reactive', () => { 

    it('happy path', () => {
      const original = { foo: 1};
      const observed = reactive(original);
      // toBe 匹配器，类似于object.js或者===，精确相等
      expect(observed).not.toBe(original);
      expect(observed.foo).toBe(1)
    })

})