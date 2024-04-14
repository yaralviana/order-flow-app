import { Request, Response } from "express"
import { RemoveItemService } from "../../services/order/RemoveItemService"

class RemoveItemController {
    async handle(req: Request, res: Response) {
        const item_id = req.query.order_id as string

        const removeOrder = new RemoveItemService()

        const order = await removeOrder.execute({
            item_id
        })

        return res.json(order)
    }
}

export { RemoveItemController }