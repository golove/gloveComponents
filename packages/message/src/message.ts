import { createVNode, render } from 'vue'
import type { VNode } from 'vue'
import { IMessageParams } from './message.type'
import MessageComponent from './message.vue'


const instances: VNode[] = []

const Message = (options: IMessageParams) => {
    if (typeof options === "string") {
        options = {
            message: options
        }
    }

    let offset = options.offset || 10
    instances.forEach(vm => {
        offset += vm.el!.offsetHeight + 10
    })

    const id = (new Date()).valueOf().toString()

    let userClose = options.onClose
    let opts = {
        id,
        ...options,
        onClose: () => {
            instances.forEach((v, i) => {
                if (v.props!.id === id) {
                    instances.splice(i, 1)
                }
            })
            userClose?.() // es10的链判断运算符
        },
        offset
    }
    const container = document.createElement('div')
    const vm = createVNode(MessageComponent, opts as any)
    vm.props!.onDestroy = () => {
        render(null, container)
    }

    render(vm, container)
    document.body.appendChild(container.firstChild!)
    instances.push(vm)
}

export default Message