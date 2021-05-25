forever(function () {
    if (Music == 3) {
        music.playMelody("- A - A - A - B ", 250)
        if (Music == 3) {
            music.playMelody("A G F E - E - E ", 250)
            if (Music == 3) {
                music.playMelody("A G F D - D - D ", 250)
                if (Music == 3) {
                    music.playMelody("A G F G - G - G ", 250)
                    if (Music == 3) {
                        for (let index = 0; index < 2; index++) {
                            if (Music == 3) {
                                music.playMelody("E E E E - F G F ", 250)
                                if (Music == 3) {
                                    music.playMelody("E F D C C - E - ", 250)
                                    if (Music == 3) {
                                        music.playMelody("E E C C - E F E ", 250)
                                        if (Music == 3) {
                                            music.playMelody("F - G - A G F E ", 250)
                                        }
                                    }
                                }
                            }
                        }
                        if (Music == 3) {
                            for (let index = 0; index < 2; index++) {
                                if (Music == 3) {
                                    music.playMelody("F - E - F G E F ", 250)
                                    if (Music == 3) {
                                        music.playMelody("E F E - C D E D ", 250)
                                    }
                                }
                            }
                            if (Music == 3) {
                                music.playMelody("A A G G F E D E ", 250)
                                if (Music == 3) {
                                    music.playMelody("G G - G F G A C5 ", 250)
                                    pause(1000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 3) {
        music.playMelody("- A - A - A - B ", 250)
        if (Music == 3) {
            music.playMelody("A G F E - E - E ", 250)
            if (Music == 3) {
                music.playMelody("A G F D - D - D ", 250)
                if (Music == 3) {
                    music.playMelody("A G F G - G - G ", 250)
                    if (Music == 3) {
                        for (let index = 0; index < 2; index++) {
                            if (Music == 3) {
                                music.playMelody("A A G G - A B A ", 250)
                                if (Music == 3) {
                                    music.playMelody("A B G F F - A - ", 250)
                                    if (Music == 3) {
                                        music.playMelody("A A F F - A B A ", 250)
                                        if (Music == 3) {
                                            music.playMelody("C - C - C C C C ", 250)
                                        }
                                    }
                                }
                            }
                        }
                        if (Music == 3) {
                            for (let index = 0; index < 2; index++) {
                                if (Music == 3) {
                                    music.playMelody("B - A - B C5 A B ", 250)
                                    if (Music == 3) {
                                        music.playMelody("A B A - F A B F ", 250)
                                    }
                                }
                            }
                            if (Music == 3) {
                                music.playMelody("A A G G F E D E ", 250)
                                if (Music == 3) {
                                    music.playMelody("G G - G F G A C5 ", 250)
                                    pause(1000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
namespace SpriteKind {
    export const objects = SpriteKind.create()
    export const sword = SpriteKind.create()
    export const hero = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    direction = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (title < 1) {
        title = 1
    }
    if (destroy == 0) {
        if (slash > 0) {
            if (direction == 4) {
                animation.runImageAnimation(
                Skylar,
                [img`
                    ...ffffff............
                    .ffeeeeeef...........
                    feeeeeeeeef..........
                    feeeeeeeeef...cc.....
                    feeeeeeeeeef.cdc.....
                    feeeeeeeeeefcddc.....
                    feeee444444cddc......
                    fe444bf444cddc.......
                    fe4d41fdd4cdc........
                    feee4ddd4dccc........
                    .ffee4444dde.........
                    ..f888844ee..........
                    ..f888888f...........
                    ..f888885f...........
                    ...ffffff............
                    ....fff..............
                    .....................
                    .....................
                    `,img`
                    .....................
                    ......fff............
                    ...fffeeef...........
                    .ffeeeeeeeff.........
                    feeeeeeeeeeef........
                    feeeeeeeeeeef........
                    feeeeeeeeeeeef.......
                    feeeeeeeeeeeef.......
                    feeee44444444f.....cc
                    fee444bbf4444f...ccdc
                    fee4d4bbfdd4f..ccddcc
                    .feee4dddddfeecdddc..
                    ..f8888888eeddcdcc...
                    ..f888885e44ddccc....
                    ..ffffffffeeee.......
                    ..fff...ff...........
                    .....................
                    .....................
                    `,img`
                    .....................
                    ...fffffff...........
                    .ffeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeeef........
                    feeeeeeeeeeef........
                    feeeeeee4444f........
                    fee444bf4444f........
                    fee4d4bfdd4f.........
                    .feee4ddd44.c........
                    ..f888888ddeccccccc..
                    ..f888888ddecddddd...
                    ..fffff5eee.ccccc....
                    .ffffffff...c........
                    .fff..ff.............
                    .....................
                    .....................
                    `,img`
                    .....................
                    ...ffffff............
                    .ffeeeeeef...........
                    feeeeeeeeef..........
                    feeeeeeeeef..........
                    feeeeeeeeef..........
                    feeee44444f..........
                    fe444bf444f..........
                    fe4d41fddf...........
                    fe444ddddf...........
                    .fdd44444f...........
                    .fdde88ccc...........
                    ..eef88cdc...........
                    ..f8885cddc..........
                    ...fffffcddc.........
                    ....fff..cddc........
                    ..........cdc........
                    ...........cc........
                    `,img`
                    ...ffffff............
                    .ffeeeeeef...........
                    feeeeeeeeef..........
                    feeeeeeeeef..........
                    feeeeeeeeef..........
                    feeee44444f..........
                    fe444bf444f..........
                    fe4d41fdd4f..........
                    fe444ddddf...........
                    .ff444444f...........
                    ..4dde888f...........
                    ..edde888f...........
                    ..feef855f...........
                    ...ffffff............
                    ....fff..............
                    .....................
                    .....................
                    .....................
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 8 . . . . . . . . . . . 
                    . . e e 8 d d d d d d d . . . . 
                    . . e e 8 1 1 1 1 1 1 1 1 1 . . 
                    . . . . 8 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Skylar, 100, 0)
                animation.runImageAnimation(
                projectile,
                [img`
                    ..8..................
                    ee8ddddddd...........
                    ee8111111111.........
                    ..8..................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ..9..................
                    ee96666666...........
                    ee9999999999.........
                    ..9..................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `],
                150,
                true
                )
                pause(100)
            }
            if (direction == 2) {
                animation.runImageAnimation(
                Skylar,
                [img`
                    ............ffffff...
                    ...........feeeeeeff.
                    ..........feeeeeeeeef
                    .....cc...feeeeeeeeef
                    .....cdc.feeeeeeeeeef
                    .....cddcfeeeeeeeeeef
                    ......cddc444444eeeef
                    .......cddc444fb444ef
                    ........cdc4ddf14d4ef
                    ........cccd4ddd4eeef
                    .........edd4444eeff.
                    ..........ee448888f..
                    ...........f888888f..
                    ...........f588888f..
                    ............ffffff...
                    ..............fff....
                    .....................
                    .....................
                    `,img`
                    .....................
                    ............fff......
                    ...........feeefff...
                    .........ffeeeeeeeff.
                    ........feeeeeeeeeeef
                    ........feeeeeeeeeeef
                    .......feeeeeeeeeeeef
                    .......feeeeeeeeeeeef
                    cc.....f44444444eeeef
                    cdcc...f4444fbb444eef
                    ccddcc..f4ddfbb4d4eef
                    ..cdddceefddddd4eeef.
                    ...ccdcddee8888888f..
                    ....cccdd44e588888f..
                    .......eeeeffffffff..
                    ...........ff...fff..
                    .....................
                    .....................
                    `,img`
                    .....................
                    ...........fffffff...
                    ..........feeeeeeeff.
                    .........feeeeeeeeeef
                    .........feeeeeeeeeef
                    ........feeeeeeeeeeef
                    ........feeeeeeeeeeef
                    ........f4444eeeeeeef
                    ........f4444fb444eef
                    .........f4ddfb4d4eef
                    ........c.44ddd4eeef.
                    ..cccccccedd888888f..
                    ...dddddcedd888888f..
                    ....ccccc.eee5fffff..
                    ........c...ffffffff.
                    .............ff..fff.
                    .....................
                    .....................
                    `,img`
                    .....................
                    ............ffffff...
                    ...........feeeeeeff.
                    ..........feeeeeeeeef
                    ..........feeeeeeeeef
                    ..........feeeeeeeeef
                    ..........f44444eeeef
                    ..........f444fb444ef
                    ...........fddf14d4ef
                    ...........fdddd444ef
                    ...........f44444ddf.
                    ...........ccc88eddf.
                    ...........cdc88fee..
                    ..........cddc5888f..
                    .........cddcfffff...
                    ........cddc..fff....
                    ........cdc..........
                    ........cc...........
                    `,img`
                    ............ffffff...
                    ...........feeeeeeff.
                    ..........feeeeeeeeef
                    ..........feeeeeeeeef
                    ..........feeeeeeeeef
                    ..........f44444eeeef
                    ..........f444fb444ef
                    ..........f4ddf14d4ef
                    ...........fdddd444ef
                    ...........f444444ff.
                    ...........f888edd4..
                    ...........f888edde..
                    ...........f558feef..
                    ............ffffff...
                    ..............fff....
                    .....................
                    .....................
                    .....................
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 8 . . . . 
                    . . . . d d d d d d d 8 e e . . 
                    . . 1 1 1 1 1 1 1 1 1 8 e e . . 
                    . . . . . . . . . . . 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Skylar, -100, 0)
                animation.runImageAnimation(
                projectile,
                [img`
                    .........8...........
                    ..ddddddd8ee.........
                    1111111118ee.........
                    .........8...........
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    .........9...........
                    ..66666669ee.........
                    9999999999ee.........
                    .........9...........
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `],
                150,
                true
                )
            }
            if (direction == 3) {
                animation.runImageAnimation(
                Skylar,
                [img`
                    ..ffffffff...........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    fee444444eef.........
                    fe4bf44fb4ef.........
                    fe41fddf14ef.........
                    fe4ddddddef..........
                    .f44444edd4e.........
                    .4f8888edde..........
                    .4f88cccee...........
                    ..f88cdc8f...........
                    ..fffddcff...........
                    ...fddcff............
                    ..cddc...............
                    ..cdc................
                    ..cc.................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ...ffffff............
                    .ffeeeeeeff..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    fee444444eef.........
                    fe4bf44fb4ef.........
                    fe41fddf14ef.........
                    .f4ddddddef..........
                    .4f88888f4e..........
                    .4f88558f4e..........
                    ..ffffffdde..........
                    ...ffffedde..........
                    ........ee...........
                    .......ccc...........
                    ......cc1cc..........
                    .......c1c...........
                    .......c1c...........
                    .......c1c...........
                    .......c1c...........
                    `,img`
                    ..ffffffff...........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    fee444444eef......ccc
                    fe4bf44fb4ef.....cddc
                    fe4bf44fb4ef....cddc.
                    fe4dddddd4ef..ccddc..
                    fe4ddddd4effeecddc...
                    .f4444444f4eddccc....
                    .4f888888f1edde......
                    .4f888888f44ee.......
                    ..f885588f...........
                    ..ffffffff...........
                    ...ff..ff............
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ....ffff.............
                    ..ffeeeeff...........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    fee444444eef.........
                    fe4bf44fb4ef.........
                    fe41fddf14ef.........
                    fe4dddddd4ef.........
                    .f44444444f..........
                    .4f888888f4..........
                    4df888888fd4.........
                    .4f885588f4..........
                    ...ffffff............
                    ...ff..ff............
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . e e . . . . . . . . 
                    . . . . . . e e . . . . . . . . 
                    . . . . . 8 8 8 8 . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 . . . . . . . . . 
                    . . . . . . 1 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Skylar, 0, 100)
                animation.runImageAnimation(
                projectile,
                [img`
                    .ee..................
                    .ee..................
                    8888.................
                    .1d..................
                    .1d..................
                    .1d..................
                    .1d..................
                    .1d..................
                    .1d..................
                    .1d..................
                    .1...................
                    .1...................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    .ee..................
                    .ee..................
                    9999.................
                    .96..................
                    .96..................
                    .96..................
                    .96..................
                    .96..................
                    .96..................
                    .96..................
                    .9...................
                    .9...................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `],
                150,
                true
                )
            }
            if (direction == 1) {
                animation.runImageAnimation(
                Skylar,
                [img`
                    ..ffffffff...........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    .feeeeeeeef..........
                    e4ffffffff4e.........
                    4df888888fd4.........
                    44f888888f44.........
                    ...ffffff............
                    ...ff..ff............
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ..ffffffff...........
                    .feeeeeeeef..........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeefdf.......
                    .feeeeeeeeefbf.......
                    .effffffff4ebf.......
                    .4f88888eddecf.......
                    .effffffee4ee........
                    ..fff................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ..ffffffff...........
                    .feeeeeeeef..........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    .feeeeeeeef..........
                    .4ffffffffe..........
                    4dde88888f4..........
                    .4eeffffffe..........
                    .......fff...........
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ..ffffffff...........
                    .feeeeeeeef..........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    feeeeeeeeeef.........
                    .feeeeeeeef..........
                    e4ffffffff4e.........
                    4df888888fd4.........
                    44f888888f44.........
                    ...ffffff............
                    ...ff..ff............
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 1 . . . . . . 
                    . . . . . . . . . 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . 8 8 8 8 . . . . . 
                    . . . . . . . . e e . . . . . . 
                    . . . . . . . . e e . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Skylar, 0, -100)
                animation.runImageAnimation(
                projectile,
                [img`
                    ..1..................
                    ..1..................
                    .d1..................
                    .d1..................
                    .d1..................
                    .d1..................
                    .d1..................
                    .d1..................
                    .d1..................
                    8888.................
                    .ee..................
                    .ee..................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `,img`
                    ..9..................
                    ..9..................
                    .69..................
                    .69..................
                    .69..................
                    .69..................
                    .69..................
                    .69..................
                    .69..................
                    9999.................
                    .ee..................
                    .ee..................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    .....................
                    `],
                150,
                true
                )
            }
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Skylar)
})
sprites.onOverlap(SpriteKind.hero, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (fight == 1) {
        info.changeLifeBy(-1)
        music.jumpDown.play()
        pause(2000)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f e e e e e e f f . . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f 4 4 4 4 4 e e e e f . . . 
        . . f 4 4 4 f b 4 4 4 e f . . . 
        . . f 4 d d f 1 4 d 4 e f . . . 
        . . . f d d d d 4 4 4 e f . . . 
        . . . f 4 4 4 4 4 4 f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 8 8 8 e d d e . . . . . 
        . . . f 5 5 8 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f e e e e e e f f . . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f 4 4 4 4 4 e e e e f . . . 
        . . f 4 4 4 f b 4 4 4 e f . . . 
        . . f 4 d d f 1 4 d 4 e f . . . 
        . . . f d d d d 4 4 4 e f . . . 
        . . . f 4 4 4 4 e d d 4 . . . . 
        . . . f 8 8 8 8 e d d e . . . . 
        . . f f 5 5 8 8 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
    direction = 2
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Skylar)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Skylar)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e e e f . . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e 4 4 4 4 4 f . . 
        . . . f e 4 4 4 b f 4 4 4 f . . 
        . . . f e 4 d 4 1 f d d 4 f . . 
        . . . f e 4 4 4 d d d d f . . . 
        . . . . f f 4 4 4 4 4 4 f . . . 
        . . . . . 4 d d e 8 8 8 f . . . 
        . . . . . e d d e 8 8 8 f . . . 
        . . . . . f e e f 8 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e e e f . . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e 4 4 4 4 4 f . . 
        . . . f e 4 4 4 b f 4 4 4 f . . 
        . . . f e 4 d 4 1 f d d 4 f . . 
        . . . f e 4 4 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 4 f . . . 
        . . . . e d d e 8 8 8 8 f . . . 
        . . . . f e e f 8 8 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
    direction = 4
})
sprites.onOverlap(SpriteKind.hero, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 0))
    health += 1
    heart_place = 0
})
sprites.onOverlap(SpriteKind.sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (projectile.overlapsWith(gargus)) {
        animation.runImageAnimation(
        gargus,
        [img`
            ........................
            ........................
            .11..1..................
            ..11.11.................
            ...11.11................
            ....11.1.111............
            .....1111111............
            .....1.111111...........
            ......1.111111..........
            .....1.12112111.........
            .....11111111111........
            ........1.111111........
            ...........1111.........
            ...........11111.......1
            11.....11.1.111......111
            111111111111111111111111
            111111111111111111111111
            111....111111111........
            111...11111111111.......
            11.....111111111........
            11....1111111111........
            11....111111111.........
            .......1111111..........
            .........1111...........
            `,img`
            ........................
            ........................
            .ff..f..................
            ..ff.ff.................
            ...ff.ff................
            ....ff.f.fff............
            .....fffffff............
            .....f.ffffff...........
            ......f.ffffff..........
            .....f.f2ff2fff.........
            .....fffffffffff........
            ........1.1fffff........
            ...........ffff.........
            ...........1ffff.......f
            ff.....11.1.fff......fff
            ffffffffffffffffffffffff
            ffffffffffffffffffffffff
            fff....fffffffff........
            fff...fffffffffff.......
            ff.....fffffffff........
            ff....ffffffffff........
            ff....fffffffff.........
            .......fffffff..........
            .........ffff...........
            `,img`
            ........................
            ........................
            .11..1..................
            ..11.11.................
            ...11.11................
            ....11.1.111............
            .....1111111............
            .....1.111111...........
            ......1.111111..........
            .....1.12112111.........
            .....11111111111........
            ........1.111111........
            ...........1111.........
            ...........11111.......1
            11.....11.1.111......111
            111111111111111111111111
            111111111111111111111111
            111....111111111........
            111...11111111111.......
            11.....111111111........
            11....1111111111........
            11....111111111.........
            .......1111111..........
            .........1111...........
            `,img`
            ........................
            ........................
            .ff..f..................
            ..ff.ff.................
            ...ff.ff................
            ....ff.f.fff............
            .....fffffff............
            .....f.ffffff...........
            ......f.ffffff..........
            .....f.f2ff2fff.........
            .....fffffffffff........
            ........1.1fffff........
            ...........ffff.........
            ...........1ffff.......f
            ff.....11.1.fff......fff
            ffffffffffffffffffffffff
            ffffffffffffffffffffffff
            fff....fffffffff........
            fff...fffffffffff.......
            ff.....fffffffff........
            ff....ffffffffff........
            ff....fffffffff.........
            .......fffffff..........
            .........ffff...........
            `],
        100,
        false
        )
    }
    if (projectile.overlapsWith(garb)) {
        animation.runImageAnimation(
        garb,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . f f 5 5 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 1 9 5 5 5 5 5 5 9 1 5 f . 
            . f 5 1 f 5 5 d d 5 5 f 1 5 f . 
            . . f 5 5 5 5 d d 5 5 5 5 f . . 
            . f 5 5 7 7 5 5 5 5 7 7 5 5 f . 
            f 5 5 5 7 7 7 5 5 7 5 7 5 5 5 f 
            f 5 5 f 7 7 7 7 7 5 7 7 f 5 5 f 
            f 5 5 5 7 7 7 7 7 7 7 7 5 5 5 f 
            . f 5 5 7 7 7 7 7 7 7 7 5 5 f . 
            . . f f f 7 7 f f 7 7 f f f . . 
            . . . . f f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . f f 8 8 8 8 8 8 f f . . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . f 8 1 9 8 8 8 8 8 8 9 1 8 f . 
            . f 8 1 f 8 8 d d 8 8 f 1 8 f . 
            . . f 8 8 8 8 d d 8 8 8 8 f . . 
            . f 8 8 7 7 8 8 8 8 7 7 8 8 f . 
            f 8 8 8 7 7 7 8 8 7 8 7 8 8 8 f 
            f 8 8 f 7 7 7 7 7 8 7 7 f 8 8 f 
            f 8 8 8 7 7 7 7 7 7 7 7 8 8 8 f 
            . f 8 8 7 7 7 7 7 7 7 7 8 8 f . 
            . . f f f 7 7 f f 7 7 f f f . . 
            . . . . f f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . f f 5 5 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 1 9 5 5 5 5 5 5 9 1 5 f . 
            . f 5 1 f 5 5 d d 5 5 f 1 5 f . 
            . . f 5 5 5 5 d d 5 5 5 5 f . . 
            . f 5 5 7 7 5 5 5 5 7 7 5 5 f . 
            f 5 5 5 7 7 7 5 5 7 5 7 5 5 5 f 
            f 5 5 f 7 7 7 7 7 5 7 7 f 5 5 f 
            f 5 5 5 7 7 7 7 7 7 7 7 5 5 5 f 
            . f 5 5 7 7 7 7 7 7 7 7 5 5 f . 
            . . f f f 7 7 f f 7 7 f f f . . 
            . . . . f f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . f f 8 8 8 8 8 8 f f . . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . f 8 1 9 8 8 8 8 8 8 9 1 8 f . 
            . f 8 1 f 8 8 d d 8 8 f 1 8 f . 
            . . f 8 8 8 8 d d 8 8 8 8 f . . 
            . f 8 8 7 7 8 8 8 8 7 7 8 8 f . 
            f 8 8 8 7 7 7 8 8 7 8 7 8 8 8 f 
            f 8 8 f 7 7 7 7 7 8 7 7 f 8 8 f 
            f 8 8 8 7 7 7 7 7 7 7 7 8 8 8 f 
            . f 8 8 7 7 7 7 7 7 7 7 8 8 f . 
            . . f f f 7 7 f f 7 7 f f f . . 
            . . . . f f f . . f f . . . . . 
            `],
        100,
        false
        )
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(200, 100))
    projectile.destroy()
    enemy_health += -1
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Skylar)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f e 4 d d d d d d 4 e f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 5 5 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f 4 4 d d d d 4 4 f . . . 
        . . f e f 8 8 8 8 e d d 4 . . . 
        . . e 4 f 8 8 8 8 e d d e . . . 
        . . . . f 8 8 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f e 4 d d d d d d 4 e f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 5 5 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f 4 4 d d d d 4 4 f . . . 
        . . . 4 d d e 8 8 8 8 f e f . . 
        . . . e d d e 8 8 8 8 f 4 e . . 
        . . . . e e f 5 5 8 8 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    direction = 3
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    destroy = 1
})
sprites.onDestroyed(SpriteKind.sword, function (sprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(100, 100))
    destroy = 0
})
scene.onOverlapTile(SpriteKind.hero, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`green plains`)
    tiles.placeOnTile(Skylar, tiles.getTileLocation(6, 7))
    tiles.placeOnTile(furniture, tiles.getTileLocation(8, 5))
    tiles.placeOnTile(furniture1, tiles.getTileLocation(9, 9))
    tiles.placeOnTile(house, tiles.getTileLocation(6, 5))
    gargus.setFlag(SpriteFlag.Invisible, false)
    Music = 0
})
scene.onOverlapTile(SpriteKind.hero, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setTilemap(tilemap`level20`)
    tiles.placeOnTile(Skylar, tiles.getTileLocation(4, 6))
    tiles.placeOnTile(furniture, tiles.getTileLocation(8, 1))
    tiles.placeOnTile(furniture1, tiles.getTileLocation(4, 3))
    tiles.placeOnTile(house, tiles.getTileLocation(-100, 100))
    gargus.setFlag(SpriteFlag.Invisible, true)
    Music = 4
    if (heart_place == 1) {
        tiles.placeOnTile(heart, tiles.getTileLocation(4, 4))
    }
})
let story = 0
let fight = 0
let destroy = 0
let slash = 0
let heart_place = 0
let direction = 0
let heart: Sprite = null
let gargus: Sprite = null
let garb: Sprite = null
let Skylar: Sprite = null
let furniture1: Sprite = null
let furniture: Sprite = null
let house: Sprite = null
let projectile: Sprite = null
let Music = 3
let title = 0
music.setVolume(100)
title = 0
Music = 3
if (title < 1) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(200)
    if (title < 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        pause(200)
        if (title < 1) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            pause(200)
            if (title < 1) {
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffff
                    ffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffff
                    fffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffff
                    ffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffff
                    fffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffff
                    ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffff
                    fffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffff
                    fffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff
                    fffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffff
                    fffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffff
                    fffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff
                    fffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    fffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    ffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    ffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    fffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    ffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    ffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999fffffff999999999999999999999999999999999999999999ffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                pause(200)
                if (title < 1) {
                    scene.setBackgroundImage(img`
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        `)
                    pause(1000)
                    if (title < 1) {
                        scene.setBackgroundImage(img`
                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                            999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                            999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                            999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                            9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                            9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                            9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                            999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                            999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                            999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            `)
                        pause(200)
                        scene.setBackgroundImage(img`
                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                            999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                            999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                            999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                            9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                            9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                            9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                            999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                            999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                            999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            `)
                        if (title < 1) {
                            pause(200)
                            scene.setBackgroundImage(img`
                                99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                `)
                            if (title < 1) {
                                pause(200)
                                scene.setBackgroundImage(img`
                                    99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                    9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                    9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                    9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                    999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                    999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                    999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                    999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                    9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                    99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                    9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                    9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                    9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                    9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                    9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                    9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    `)
                                if (title < 1) {
                                    pause(200)
                                    scene.setBackgroundImage(img`
                                        99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                        9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                        9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                        9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                        999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                        999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                        999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                        999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                        9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                        99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                        9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                        9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                        9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                        9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                        9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                        9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        `)
                                    if (title < 1) {
                                        pause(200)
                                        scene.setBackgroundImage(img`
                                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                            9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                            9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                            9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                            999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                            999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            `)
                                        if (title < 1) {
                                            pause(200)
                                            scene.setBackgroundImage(img`
                                                99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                `)
                                            if (title < 1) {
                                                pause(200)
                                                scene.setBackgroundImage(img`
                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                                    9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                                    9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                                    9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                                    999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                                    999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                                    999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                                    999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                    9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                    99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                    9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                    9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                    9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                    9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                    9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                    9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    `)
                                                if (title < 1) {
                                                    pause(200)
                                                    scene.setBackgroundImage(img`
                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                        9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                        9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                        9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                        999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                        999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                        999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                        999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                        9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                        99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                        9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                        9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                        9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                        9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                        9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                        9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        `)
                                                    if (title < 1) {
                                                        pause(200)
                                                        scene.setBackgroundImage(img`
                                                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                                            9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                                            9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                                            9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                                            999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                                            999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            `)
                                                        if (title < 1) {
                                                            pause(200)
                                                            scene.setBackgroundImage(img`
                                                                99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                                9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                                999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                                999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                                999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                                999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                                9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                                99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                                9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                                9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                                9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                                9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                                9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                                9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                `)
                                                            if (title < 1) {
                                                                pause(200)
                                                                scene.setBackgroundImage(img`
                                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                                                    9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                                                    9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                                                    9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                                                    999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                                                    999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                                                    999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                                                    999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                                    9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                                    99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                                    9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                                    9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                                    9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                                    9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                                    9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                                    9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    `)
                                                                if (title < 1) {
                                                                    pause(200)
                                                                    scene.setBackgroundImage(img`
                                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                                        9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                        9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                        9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                                        999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                                        999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                                        999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                                        999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                                        9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                                        99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                                        9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                                        9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                                        9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                                        9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                                        9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                                        9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                                        99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999888888889999998889999988888888999888888889999
                                                                        9999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999
                                                                        9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999
                                                                        999999999999ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999
                                                                        99999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        9999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff9999999
                                                                        99999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff9999999
                                                                        9999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        9999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff9999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e4444411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e4444411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888888888888888884dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888888888888888884dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeee44444dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeee44444dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeee44444dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeee44f4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeee444f4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeee444f4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeee44ef4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeef4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeeafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        9ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        9fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        99fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        9999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        9999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999999
                                                                        99999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999999
                                                                        99999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999999
                                                                        99999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999999
                                                                        999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999999
                                                                        9999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff9999999999
                                                                        9999999999ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff99999999999
                                                                        999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff999999999999
                                                                        `)
                                                                    if (title < 1) {
                                                                        pause(1000)
                                                                        if (title < 1) {
                                                                            pause(1000)
                                                                            if (title < 1) {
                                                                                pause(1000)
                                                                                if (title < 1) {
                                                                                    pause(1000)
                                                                                    if (title < 1) {
                                                                                        pause(1000)
                                                                                        if (title < 1) {
                                                                                            pause(1000)
                                                                                        }
                                                                                        if (title < 1) {
                                                                                            pause(1000)
                                                                                            game.showLongText("Press the A brutton to start!", DialogLayout.Bottom)
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
music.setVolume(100)
title = 1
Music = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setTilemap(tilemap`green plains`)
let house2 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.objects)
let house3 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.objects)
let house4 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.objects)
let house5 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.objects)
projectile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.sword)
house = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `, SpriteKind.objects)
furniture = sprites.create(img`
    .cccccccccccccc.
    cbddddddddddddbc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cddddddddddddddc
    cbddddddddddddbc
    ccbbbbbbbbbbbbcc
    ccffffffffffffcc
    cbc44c7c66c3ccbc
    cbc44c7c66c3ccbc
    fbc44c7c66c3ccbf
    fdccccccccccccdf
    fdcbbddddddbbcdf
    fdffffffffffffdf
    fdcc4c44c3c7ccdf
    fdcc4c44c3c7ccdf
    fdcccc44ccc7ccdf
    fdccccccccccccdf
    fdcbbddddddbbcdf
    fdcbbddddddbbcdf
    fdffffffffffffdf
    ffffffffffffffff
    `, SpriteKind.objects)
furniture1 = sprites.create(img`
    ..cccccccccccccccccccccccccccc..
    .bddddddddddddddddddddddddddddb.
    cddddddddddddddddddddddddddddddc
    cbbb3ddd33d3dddd3333dddd3d333bbc
    cddddddddddddddddddddddddddddddc
    cddddddddddddddddddddddddddddddc
    cddddddddddddddddddddddddddddddc
    cbb33dddd3bb33d33dd33ddd33333bbc
    cddddddddddddddddddddddddddddddc
    cddddddddddddddddddddddddddddddc
    cddddddddddddddddddddddddddddddc
    cb333dddd3db3dddddddd33333ddd3bc
    cddddddddddddddddddddddddddddddc
    cddddddddddddddddddddddddddddddc
    cddddddddddddddddddddddddddddddc
    cbbbbbb3333333dddd333d3dddd33bbc
    cddddddddddddddddddddddddddddddc
    cbddddddddddddddddddddddddddddbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    .cccccccccccccccccccccccccccccc.
    ..cbbc....................cbbc..
    ..c33c....................c33c..
    ...cc......................cc...
    `, SpriteKind.objects)
Skylar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f e e e e e e e e f . . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . f e 4 b f 4 4 f b 4 e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . f e 4 d d d d d d 4 e f . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . 4 f 8 8 8 8 8 8 f 4 . . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . . 4 f 8 8 5 5 8 8 f 4 . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.hero)
let quinn = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . . f e 1 7 4 4 7 1 e f . . . 
    . . . f e 1 f d d f 1 e f . . . 
    . . . f e 4 d d d d 4 e f . . . 
    . . f e f e 4 4 4 4 e f e f . . 
    . . . f 4 e a 3 3 a e 4 f . . . 
    . . . 4 d a 3 a a 3 a d 4 . . . 
    . . . . 4 3 3 a a 3 3 4 . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
garb = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 8 8 8 8 f . . . . . 
    . . . f f 8 8 8 8 8 8 f f . . . 
    . . f 8 8 8 8 8 8 8 8 8 8 f . . 
    . f 8 1 9 8 8 8 8 8 8 9 1 8 f . 
    . f 8 1 f 8 8 d d 8 8 f 1 8 f . 
    . . f 8 8 8 8 d d 8 8 8 8 f . . 
    . f 8 8 7 7 8 8 8 8 7 7 8 8 f . 
    f 8 8 8 7 7 7 8 8 7 8 7 8 8 8 f 
    f 8 8 f 7 7 7 7 7 8 7 7 f 8 8 f 
    f 8 8 8 7 7 7 7 7 7 7 7 8 8 8 f 
    . f 8 8 7 7 7 7 7 7 7 7 8 8 f . 
    . . f f f 7 7 f f 7 7 f f f . . 
    . . . . f f f . . f f . . . . . 
    `, SpriteKind.Enemy)
gargus = sprites.create(img`
    ........................
    ........................
    .ff..f..................
    ..ff.ff.................
    ...ff.ff................
    ....ff.f.fff............
    .....fffffff............
    .....f.ffffff...........
    ......f.ffffff..........
    .....f.f2ff2fff.........
    .....fffffffffff........
    ........1.1fffff........
    ...........ffff.ff......
    ff.........1ffff.f.....f
    ffffff.11.1.fff......fff
    ff....ffffffffffffffffff
    fff...fffffffff......fff
    fff....ffffffff.........
    ff....fffffffffff.......
    ff.....fffffffff........
    ff....ffffffffff........
    ......fffffffff.........
    .......fffffff..........
    .........11ff...........
    `, SpriteKind.Enemy)
heart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f . f f f f f . . 
    . . f f 3 3 3 f f f 3 3 3 f f . 
    . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f f 3 3 3 b b b 3 3 3 f f . 
    . . . f f 3 b b b b b 3 f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(Skylar, tiles.getTileLocation(9, 25))
tiles.placeOnTile(house5, tiles.getTileLocation(60, 10))
tiles.placeOnTile(house4, tiles.getTileLocation(50, 11))
tiles.placeOnTile(house2, tiles.getTileLocation(61, 19))
tiles.placeOnTile(house3, tiles.getTileLocation(46, 18))
tiles.placeOnTile(quinn, tiles.getTileLocation(100, 100))
tiles.placeOnTile(garb, tiles.getTileLocation(-100, 100))
tiles.placeOnTile(gargus, tiles.getTileLocation(36, 19))
tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
tiles.placeOnTile(house, tiles.getTileLocation(6, 5))
tiles.placeOnTile(furniture, tiles.getTileLocation(8, 5))
tiles.placeOnTile(furniture1, tiles.getTileLocation(9, 9))
tiles.placeOnTile(heart, tiles.getTileLocation(100, 9))
scene.cameraFollowSprite(Skylar)
controller.moveSprite(Skylar)
direction = 0
let enemy_health = 10
let health = 1
heart_place = 0
slash = 0
destroy = 0
info.setLife(3)
forever(function () {
    if (Music == 2) {
        music.playMelody("A G A G A G A G ", 274)
        if (Music == 2) {
            music.playMelody("B A B A B A B A ", 274)
            if (Music == 2) {
                music.playMelody("A G A G A G A G ", 274)
                if (Music == 2) {
                    music.playMelody("B A B A B A B A ", 274)
                    pause(100)
                    if (Music == 2) {
                        music.playMelody("F E - D - F E D ", 274)
                        pause(1000)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 2) {
        music.playMelody("E G E G E G E G ", 274)
        if (Music == 2) {
            music.playMelody("F A F A F A F A ", 274)
            if (Music == 2) {
                music.playMelody("E G E G E G E G ", 274)
                if (Music == 2) {
                    music.playMelody("F A F A F A F A ", 274)
                    pause(100)
                    if (Music == 2) {
                        music.playMelody("A G - F - A G F ", 274)
                        pause(1000)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 0) {
        pause(100)
        music.playMelody("D - A - - C - - ", 170)
        if (Music == 0) {
            pause(500)
            music.playMelody("D - A - - C - E ", 170)
            if (Music == 0) {
                pause(1000)
                pause(100)
                music.playMelody("D - A - - C - - ", 170)
                if (Music == 0) {
                    pause(500)
                    music.playMelody("D - A - - C - E ", 170)
                    if (Music == 0) {
                        pause(500)
                        music.playMelody("G F - - - - - A ", 170)
                        if (Music == 0) {
                            pause(1000)
                            music.playMelody("D - - - - - G - ", 170)
                            if (Music == 0) {
                                music.playMelody("G - - - - - - - ", 170)
                                pause(2000)
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 0) {
        pause(100)
        music.playMelody("G - F G - E F D ", 170)
        if (Music == 0) {
            pause(500)
            music.playMelody("G - F G - E F G ", 170)
            if (Music == 0) {
                pause(1000)
                pause(100)
                music.playMelody("G - F G - E F D ", 170)
                if (Music == 0) {
                    pause(500)
                    music.playMelody("G - F G - E F G ", 170)
                    if (Music == 0) {
                        pause(500)
                        music.playMelody("- - E F E F G F ", 170)
                        if (Music == 0) {
                            pause(1000)
                            music.playMelody("G - - - - C5 - C5 ", 170)
                            if (Music == 0) {
                                music.playMelody("- C5 - - - - - - ", 170)
                                pause(2000)
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 0) {
        pause(100)
        music.playMelody("B - - E - - - - ", 170)
        if (Music == 0) {
            pause(500)
            music.playMelody("B - - E - - - - ", 170)
            if (Music == 0) {
                pause(1000)
                pause(100)
                music.playMelody("B - - E - - - - ", 170)
                if (Music == 0) {
                    pause(500)
                    music.playMelody("B - - E - - - - ", 170)
                    if (Music == 0) {
                        pause(500)
                        music.playMelody("- - E F E F G F ", 170)
                        if (Music == 0) {
                            pause(1000)
                            music.playMelody("B - - - - - C5 - ", 170)
                            if (Music == 0) {
                                music.playMelody("C5 - - - - - - - ", 170)
                                pause(2000)
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Skylar.overlapsWith(gargus)) {
        if (story == 0) {
            if (fight == 0) {
                tiles.setTilemap(tilemap`fight green plains`)
                tiles.placeOnTile(gargus, tiles.getTileLocation(4, 0))
                tiles.placeOnTile(Skylar, tiles.getTileLocation(4, 5))
                tiles.placeOnTile(house, tiles.getTileLocation(100, 0))
                tiles.placeOnTile(furniture, tiles.getTileLocation(100, 0))
                slash = 1
                fight = 1
                Music = 2
            }
        }
    }
})
forever(function () {
    if (Skylar.overlapsWith(garb)) {
        if (story == 1) {
            if (fight == 0) {
                tiles.setTilemap(tilemap`fight green plains`)
                tiles.placeOnTile(garb, tiles.getTileLocation(4, 0))
                tiles.placeOnTile(Skylar, tiles.getTileLocation(4, 5))
                tiles.placeOnTile(house, tiles.getTileLocation(100, 0))
                tiles.placeOnTile(furniture, tiles.getTileLocation(100, 0))
                enemy_health = 10
                slash = 1
                fight = 1
                Music = 2
            }
        }
    }
})
forever(function () {
    if (Skylar.overlapsWith(gargus)) {
        if (story == 2) {
            if (fight == 0) {
                tiles.setTilemap(tilemap`fight green plains`)
                tiles.placeOnTile(gargus, tiles.getTileLocation(4, 0))
                tiles.placeOnTile(Skylar, tiles.getTileLocation(4, 5))
                tiles.placeOnTile(house, tiles.getTileLocation(100, 0))
                tiles.placeOnTile(furniture, tiles.getTileLocation(100, 0))
                slash = 1
                fight = 1
                Music = 2
            }
        }
    }
})
forever(function () {
    if (fight == 0) {
        if (health == 1) {
            info.setLife(3)
        }
        if (health == 2) {
            info.setLife(4)
        }
        if (health == 3) {
            info.setLife(5)
        }
        if (health == 4) {
            info.setLife(6)
        }
        if (health == 5) {
            info.setLife(7)
        }
        if (health == 6) {
            info.setLife(8)
        }
    }
})
forever(function () {
    if (enemy_health == 0) {
        if (story == 1) {
            enemy_health = 12
            story = 2
            Music = 0
            fight = 0
            slash = 0
            tiles.setTilemap(tilemap`green plains`)
            controller.moveSprite(Skylar, 100, 100)
            tiles.placeOnTile(Skylar, tiles.getTileLocation(58, 13))
            tiles.placeOnTile(garb, tiles.getTileLocation(100, 100))
            tiles.placeOnTile(gargus, tiles.getTileLocation(58, 17))
            tiles.placeOnTile(furniture, tiles.getTileLocation(8, 5))
            tiles.placeOnTile(house, tiles.getTileLocation(6, 5))
        }
    }
})
forever(function () {
    if (fight == 1 && story == 2) {
        gargus.setVelocity(-50, 0)
        pause(1000)
        gargus.setVelocity(0, 100)
        pause(500)
        gargus.setVelocity(0, -100)
        pause(500)
        gargus.setVelocity(-50, 0)
        pause(1000)
        gargus.setVelocity(0, 100)
        pause(500)
        gargus.setVelocity(0, -100)
        pause(500)
        gargus.setVelocity(-50, 0)
        pause(200)
        gargus.setVelocity(0, 50)
        pause(1000)
        gargus.setVelocity(100, 0)
        pause(500)
        gargus.setVelocity(-100, 0)
        pause(500)
        gargus.setVelocity(0, 50)
        pause(1000)
        gargus.setVelocity(-100, 0)
        pause(500)
        gargus.setVelocity(100, 0)
        pause(500)
        gargus.setVelocity(0, 50)
        pause(200)
        gargus.setVelocity(50, 0)
        pause(1000)
        gargus.setVelocity(0, -100)
        pause(500)
        gargus.setVelocity(0, 100)
        pause(500)
        gargus.setVelocity(50, 0)
        pause(1000)
        gargus.setVelocity(0, -100)
        pause(500)
        gargus.setVelocity(0, 100)
        pause(500)
        gargus.setVelocity(50, 0)
        pause(200)
        gargus.setVelocity(0, -50)
        pause(1000)
        gargus.setVelocity(-100, 0)
        pause(500)
        gargus.setVelocity(100, 0)
        pause(500)
        gargus.setVelocity(0, -50)
        pause(1000)
        gargus.setVelocity(100, 0)
        pause(500)
        gargus.setVelocity(-100, 0)
        pause(500)
        gargus.setVelocity(0, -50)
        pause(200)
    }
})
forever(function () {
    if (fight == 1 && story == 0) {
        gargus.setVelocity(-30, 30)
        pause(2500)
        gargus.setVelocity(30, 30)
        pause(2500)
        gargus.setVelocity(30, -30)
        pause(2500)
        gargus.setVelocity(-30, -30)
        pause(2500)
    }
})
forever(function () {
    if (Music == 4) {
        music.playMelody("B B - - - - F F ", 300)
        if (Music == 4) {
            music.playMelody("A A - - - - G G ", 300)
            if (Music == 4) {
                music.playMelody("A G G - - F G G ", 300)
                if (Music == 4) {
                    music.playMelody("F E E - - D F F ", 300)
                    if (Music == 4) {
                        music.playMelody("G F F - - D A A ", 300)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 4) {
        music.playMelody("G G - - - - D D ", 300)
        if (Music == 4) {
            music.playMelody("F F - - - - E E ", 300)
            if (Music == 4) {
                music.playMelody("E D D - - A B B ", 300)
                if (Music == 4) {
                    music.playMelody("A G G - - F A A ", 300)
                    if (Music == 4) {
                        music.playMelody("E D D - - D F F ", 300)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (enemy_health == 0) {
        if (story == 2) {
            enemy_health = 10
            heart_place = 1
            story = 3
            Music = 0
            fight = 0
            slash = 0
            tiles.setTilemap(tilemap`green plains`)
            controller.moveSprite(Skylar, 0, 0)
            tiles.placeOnTile(Skylar, tiles.getTileLocation(58, 13))
            tiles.placeOnTile(gargus, tiles.getTileLocation(61, 12))
            tiles.placeOnTile(furniture, tiles.getTileLocation(8, 5))
            tiles.placeOnTile(house, tiles.getTileLocation(6, 5))
            gargus.setVelocity(0, 0)
            pause(2000)
            gargus.setVelocity(50, 0)
            pause(2000)
            tiles.placeOnTile(gargus, tiles.getTileLocation(100, 100))
            pause(2000)
            tiles.placeOnTile(quinn, tiles.getTileLocation(56, 14))
            quinn.setFlag(SpriteFlag.Invisible, false)
            pause(2000)
            game.showLongText("Thank you so much for helping our town!", DialogLayout.Bottom)
            game.showLongText("My name is Quinn. Happy to know ya. ", DialogLayout.Bottom)
            game.showLongText("Just to let you know, when you get a big achievement you can go to your house for a reward. ", DialogLayout.Bottom)
            tiles.placeOnTile(quinn, tiles.getTileLocation(100, 100))
            controller.moveSprite(Skylar, 100, 100)
        }
    }
})
forever(function () {
    if (enemy_health == 0) {
        if (story == 0) {
            enemy_health = 10
            story = 1
            Music = 0
            fight = 0
            slash = 0
            tiles.setTilemap(tilemap`green plains`)
            controller.moveSprite(Skylar, 0, 0)
            tiles.placeOnTile(Skylar, tiles.getTileLocation(36, 20))
            tiles.placeOnTile(garb, tiles.getTileLocation(58, 14))
            tiles.placeOnTile(gargus, tiles.getTileLocation(39, 20))
            tiles.placeOnTile(furniture, tiles.getTileLocation(8, 5))
            tiles.placeOnTile(house, tiles.getTileLocation(6, 5))
            gargus.setVelocity(0, 0)
            pause(2000)
            gargus.setVelocity(0, 50)
            pause(1000)
            gargus.setVelocity(50, 0)
            pause(2000)
            gargus.setVelocity(0, 0)
            tiles.placeOnTile(gargus, tiles.getTileLocation(100, 100))
            controller.moveSprite(Skylar, 100, 100)
        }
    }
})
forever(function () {
    if (fight == 1 && story == 1) {
        garb.setVelocity(50, 0)
        pause(1000)
        garb.setVelocity(-50, 0)
        pause(2000)
        garb.setVelocity(50, 0)
        pause(1000)
        garb.setVelocity(0, 100)
        pause(1000)
        garb.setVelocity(0, -100)
        pause(1000)
        garb.setVelocity(0, 0)
        pause(2000)
    }
})
forever(function () {
    if (fight == 0 && story == 1) {
        garb.setVelocity(50, 0)
        pause(1000)
        garb.setVelocity(-50, 0)
        pause(1000)
    }
})
forever(function () {
    projectile.setKind(SpriteKind.sword)
})
forever(function () {
    if (fight == 0 && story == 2) {
        pause(2000)
        gargus.setVelocity(0, 50)
        pause(2000)
        gargus.setVelocity(0, -50)
    }
})
pause(1000)