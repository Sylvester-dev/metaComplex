import Buy from "./buy"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)




const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(80, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(96, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(112, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(128, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(144, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(160, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(80, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(96, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(112, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform10)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(128, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform11)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(144, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform12)

const entity12 = new Entity('entity12')
engine.addEntity(entity12)
entity12.setParent(_scene)
entity12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(160, 0, 96),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity12.addComponentOrReplace(transform13)

const entity13 = new Entity('entity13')
engine.addEntity(entity13)
entity13.setParent(_scene)
entity13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(80, 0, 112),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity13.addComponentOrReplace(transform14)

const entity14 = new Entity('entity14')
engine.addEntity(entity14)
entity14.setParent(_scene)
entity14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(96, 0, 112),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity14.addComponentOrReplace(transform15)

const entity15 = new Entity('entity15')
engine.addEntity(entity15)
entity15.setParent(_scene)
entity15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(112, 0, 112),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity15.addComponentOrReplace(transform16)

const entity16 = new Entity('entity16')
engine.addEntity(entity16)
entity16.setParent(_scene)
entity16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(128, 0, 112),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity16.addComponentOrReplace(transform17)

const entity17 = new Entity('entity17')
engine.addEntity(entity17)
entity17.setParent(_scene)
entity17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(144, 0, 112),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity17.addComponentOrReplace(transform18)

const entity18 = new Entity('entity18')
engine.addEntity(entity18)
entity18.setParent(_scene)
entity18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(160, 0, 112),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity18.addComponentOrReplace(transform19)

const entity19 = new Entity('entity19')
engine.addEntity(entity19)
entity19.setParent(_scene)
entity19.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(80, 0, 128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity19.addComponentOrReplace(transform20)

const entity20 = new Entity('entity20')
engine.addEntity(entity20)
entity20.setParent(_scene)
entity20.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(96, 0, 128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity20.addComponentOrReplace(transform21)

const entity21 = new Entity('entity21')
engine.addEntity(entity21)
entity21.setParent(_scene)
entity21.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(112, 0, 128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity21.addComponentOrReplace(transform22)

const entity22 = new Entity('entity22')
engine.addEntity(entity22)
entity22.setParent(_scene)
entity22.addComponentOrReplace(gltfShape)
const transform23 = new Transform({
  position: new Vector3(128, 0, 128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity22.addComponentOrReplace(transform23)

const entity23 = new Entity('entity23')
engine.addEntity(entity23)
entity23.setParent(_scene)
entity23.addComponentOrReplace(gltfShape)
const transform24 = new Transform({
  position: new Vector3(144, 0, 128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity23.addComponentOrReplace(transform24)

const entity24 = new Entity('entity24')
engine.addEntity(entity24)
entity24.setParent(_scene)
entity24.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(160, 0, 128),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity24.addComponentOrReplace(transform25)

const entity25 = new Entity('entity25')
engine.addEntity(entity25)
entity25.setParent(_scene)
entity25.addComponentOrReplace(gltfShape)
const transform26 = new Transform({
  position: new Vector3(80, 0, 144),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity25.addComponentOrReplace(transform26)

const entity26 = new Entity('entity26')
engine.addEntity(entity26)
entity26.setParent(_scene)
entity26.addComponentOrReplace(gltfShape)
const transform27 = new Transform({
  position: new Vector3(96, 0, 144),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity26.addComponentOrReplace(transform27)

const entity27 = new Entity('entity27')
engine.addEntity(entity27)
entity27.setParent(_scene)
entity27.addComponentOrReplace(gltfShape)
const transform28 = new Transform({
  position: new Vector3(112, 0, 144),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity27.addComponentOrReplace(transform28)

const entity28 = new Entity('entity28')
engine.addEntity(entity28)
entity28.setParent(_scene)
entity28.addComponentOrReplace(gltfShape)
const transform29 = new Transform({
  position: new Vector3(128, 0, 144),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity28.addComponentOrReplace(transform29)

const entity29 = new Entity('entity29')
engine.addEntity(entity29)
entity29.setParent(_scene)
entity29.addComponentOrReplace(gltfShape)
const transform30 = new Transform({
  position: new Vector3(144, 0, 144),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity29.addComponentOrReplace(transform30)

const entity30 = new Entity('entity30')
engine.addEntity(entity30)
entity30.setParent(_scene)
entity30.addComponentOrReplace(gltfShape)
const transform31 = new Transform({
  position: new Vector3(160, 0, 144),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})


entity30.addComponentOrReplace(transform31)








const wwwwwwwwwwwwwww = new Entity('wwwwwwwwwwwwwww')
engine.addEntity(wwwwwwwwwwwwwww)
wwwwwwwwwwwwwww.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(59.5, -2, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(68.0625, 30.25, 75.625)
})
wwwwwwwwwwwwwww.addComponentOrReplace(transform32)
const gltfShape2 = new GLTFShape("23b6ed08-4da7-46d7-b6ae-194353cbf53b/wwwwwwwwwwwwwww.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wwwwwwwwwwwwwww.addComponentOrReplace(gltfShape2)

const blHelmetCF = new Entity('blHelmetCF')
engine.addEntity(blHelmetCF)
blHelmetCF.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(69, -3, 65),// (x,0.5,z) and scale to 5
  rotation: Quaternion.Euler(0, 180, 0) ,
  scale: new Vector3(4, 4, 4)
})


blHelmetCF.addComponentOrReplace(transform33)

const gltfShape3 = new GLTFShape("1f762a00-556c-4715-8083-1ea89422d002/BL_Helmet_C11_f.glb")

gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true


blHelmetCF.addComponentOrReplace(gltfShape3)


// const show = new Entity()
// engine.addEntity(show)
// show.setParent(_scene)
// show.addComponent(new GLTFShape("asset/show.glb"))
// show.addComponent(new Transform({
//   position: new Vector3(65, 0, 63),
//   rotation: Quaternion.Euler(0, 180, 0),
//   scale: new Vector3(2,2,2)
// }))
// const myText = new TextShape("Check the QR code for more info")
// show.addComponent(myText)
// show.getComponent(TextShape).fontSize = 3
// show.getComponent(TextShape).color = Color3.Black()
// show.getComponent(TextShape).height = 10
// show.getComponent(TextShape).width = 8
// show.addComponent(
//   new Transform({
//     position: new Vector3(65, 2, 63)
//   })
// )


const button = new Entity()
engine.addEntity(button)
button.setParent(_scene)
button.addComponent(new GLTFShape("asset/Button.glb"))
button.addComponent(new Transform({
  position: new Vector3(70, 0, 65),
  scale: new Vector3(5,5,5)
}))
button.addComponent((new OnPointerDown((e) => {
  //log("kjsdbcjk")
  Buy(2)
}, { hoverText: 'Buy The Helmet' })))

const button2 = new Entity()
engine.addEntity(button2)
button2.setParent(_scene)
button2.addComponent(new GLTFShape("asset/Button.glb"))
button2.addComponent(new Transform({
  position: new Vector3(68, 0, 65),
  scale: new Vector3(5,5,5)
}))
button2.addComponent((new OnPointerDown((e) => {
  log("kjsdbcjk")
  openExternalURL("https://testnets.opensea.io/assets/mumbai/0xb4619339d309119892a01f29c8b0afad68f72d71/1")

},{ hoverText: 'Check opensea' })))




const blHelmetCF2 = new Entity('blHelmetCF2')
engine.addEntity(blHelmetCF2)
blHelmetCF2.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(69, -3, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
blHelmetCF2.addComponentOrReplace(transform34)
blHelmetCF2.addComponentOrReplace(gltfShape3)

const fTeeAtariBlue = new Entity('fTeeAtariBlue')
engine.addEntity(fTeeAtariBlue)
fTeeAtariBlue.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(49, 6, 60),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(4, 4, 4)
})
fTeeAtariBlue.addComponentOrReplace(transform35)
const gltfShape4 = new GLTFShape("95974d29-3345-4c2a-9f6f-54565659239a/F_Tee_Atari_Blue.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
fTeeAtariBlue.addComponentOrReplace(gltfShape4)

const fWzWonderbotFeet = new Entity('fWzWonderbotFeet')
engine.addEntity(fWzWonderbotFeet)
fWzWonderbotFeet.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(49, 1.5, 65),
  rotation: Quaternion.Euler(0, 180, 0) ,
  scale: new Vector3(4, 4, 4)
})
fWzWonderbotFeet.addComponentOrReplace(transform36)
const gltfShape5 = new GLTFShape("8f450895-6d33-464e-be34-c5e096dda52c/F_wz_wonderbot_feet.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
fWzWonderbotFeet.addComponentOrReplace(gltfShape5)

const mTeeAtariBlue = new Entity('mTeeAtariBlue')
engine.addEntity(mTeeAtariBlue)
mTeeAtariBlue.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(49, 6, 20),  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
mTeeAtariBlue.addComponentOrReplace(transform37)
const gltfShape6 = new GLTFShape("2f60c4bd-8540-4adf-8766-2557cd8482d6/M_Tee_Atari_Blue.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
mTeeAtariBlue.addComponentOrReplace(gltfShape6)

const mWzWonderbotFeet = new Entity('mWzWonderbotFeet')
engine.addEntity(mWzWonderbotFeet)
mWzWonderbotFeet.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(49, 1.5, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
mWzWonderbotFeet.addComponentOrReplace(transform38)
const gltfShape7 = new GLTFShape("c2686e2e-ed28-4d6d-8a39-174037a9a8cc/M_wz_wonderbot_feet.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
mWzWonderbotFeet.addComponentOrReplace(gltfShape7)

const steampunkTrousersFemale = new Entity('steampunkTrousersFemale')
engine.addEntity(steampunkTrousersFemale)
steampunkTrousersFemale.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(69, 11, 60),
  rotation: Quaternion.Euler(0, 180, 0) ,
  scale: new Vector3(4, 4, 4)
})
steampunkTrousersFemale.addComponentOrReplace(transform39)
const gltfShape8 = new GLTFShape("359f0caf-132f-4aad-9b3d-8c371f78dabd/steampunk_trousers_female.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
steampunkTrousersFemale.addComponentOrReplace(gltfShape8)

const steampunkTrousersMale = new Entity('steampunkTrousersMale')
engine.addEntity(steampunkTrousersMale)
steampunkTrousersMale.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(69, 11, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
steampunkTrousersMale.addComponentOrReplace(transform40)
const gltfShape9 = new GLTFShape("833c6f89-af44-4e46-b9b8-e31271e77718/steampunk_trousers_male.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
steampunkTrousersMale.addComponentOrReplace(gltfShape9)

const windowXGlassPanel2 = new Entity('windowXGlassPanel2')
engine.addEntity(windowXGlassPanel2)
windowXGlassPanel2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(21, 2.5, 73),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(23.437538146972656, 6.25, 6.2500176429748535)
})
windowXGlassPanel2.addComponentOrReplace(transform41)
const gltfShape10 = new GLTFShape("35978cd5-66e3-445d-a2c6-539987f13ca1/Window 2x4 Glass Panel.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
windowXGlassPanel2.addComponentOrReplace(gltfShape10)

const windowXGlassPanel3 = new Entity('windowXGlassPanel3')
engine.addEntity(windowXGlassPanel3)
windowXGlassPanel3.setParent(_scene)
windowXGlassPanel3.addComponentOrReplace(gltfShape10)
const transform42 = new Transform({
  position: new Vector3(21.5, 2.5, 35.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(19.3673095703125, 7.03125, 7.055067710876465)
})
windowXGlassPanel3.addComponentOrReplace(transform42)




