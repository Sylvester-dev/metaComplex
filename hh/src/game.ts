// import { createDispenser } from './booth/dispenser'

// createDispenser(
//   {
//     position: new Vector3(8, 0, 8),
//     rotation: Quaternion.Euler(0, 0, 0)
//   },
//   'acd27e4b-24bd-4040-b715-c0e11e863fb0'
// )



// let mall = new Entity()
// mall.addComponent(new GLTFShape("models/loda.glb"))
// mall.addComponent(
//   new Transform({
//     position: new Vector3(3, 1, 30),
//     scale: new Vector3(10, 10, 10),
//   })
// )

// engine.addEntity(mall)


let rr = new Entity()
rr.addComponent(new GLTFShape("models/da.glb"))
rr.addComponent(
  new Transform({
    position: new Vector3(3, 1, 30),
    scale: new Vector3(6, 6, 6),
  })
)

engine.addEntity(rr)
