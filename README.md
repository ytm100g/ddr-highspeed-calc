# ddr-highspeed-calc
to calculate the best speed modifiers for you

# やりたいこと

- DDRのハイスピード設定を簡単にしたい
- BPM×倍率で求められる数値を**Fit Speed**と表現する

# スペック

- 事前にFit Speedを決めておき、曲をプレイする前にそのBPMを入力すると即座に適切な倍率が表示される
- 詳細設定でどこまでの上振れを許可するかを設定することができる
- スマホ向けのUIにする
  - ただどうやればスマホにとって価値が高いのか分からないのでとりあえずapiだけ作る?

# 設計

## 入力

- 目標Fit Speed
  - 1~65535
- BPM
  - 1~65535