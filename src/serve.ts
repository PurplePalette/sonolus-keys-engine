import { serve } from 'sonolus.js'
import { buildOutputBuilder } from '.'
// import { buildOutput } from '.'

/*
 * [serve.ts]
 * npm run serve した際に実行されるスクリプト
 *  1 実行時に 同一フォルダ内の index.tsをimportする
 *  2 index.ts内で engineとlevelフォルダ内のソースをimportする
 *  3 index.ts内で ビルドが行われる
 *  4 このコード内で ビルド結果をbuildOutputとして受け取る
 *  5 buildOutputをserve(Sonolus-Express)に渡す (サーバーを開始する)
 *  6 sonolus-expressに渡したテストレベルにジャケットや音源を指定する
 *    ※ テスト用のため、直URLを指定している
 *    ※ 譜面はビルド前に渡しておりビルド結果に含まれている
 */

buildOutputBuilder().then((buildOutput) => {
    const sonolus = serve(buildOutput)
    sonolus.db.levels[0].bgm = sonolus.add('LevelBgm', './src/bgm.mp3')
})

/*
sonolus.db.effects[0].data = sonolus.add(
    'EffectData',
    Buffer.from(effectOutput)
)
*/
