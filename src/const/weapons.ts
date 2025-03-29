export const WEAPON = [
    { name: 'わかばシューター', lc: 'SHOOTER', sc: 'わかばシューター', role: 'PAINT', range: 'SHORT' },
    { name: 'もみじシューター', lc: 'SHOOTER', sc: 'わかばシューター', role: 'PAINT', range: 'SHORT' },
    { name: 'ボールドマーカー', lc: 'SHOOTER', sc: 'ボールドマーカー', role: 'PAINT', range: 'SHORT' },
    { name: 'ボールドマーカーネオ', lc: 'SHOOTER', sc: 'ボールドマーカー', role: 'PAINT', range: 'SHORT' },
    { name: 'ノヴァブラスター', lc: 'BLUSTER', sc: 'ボールドマーカー', role: 'KILL', range: 'SHORT' },
    { name: 'スプラシューター', lc: 'SHOOTER', sc: 'スプラシューター', role: 'BALANCED', range: 'SHORT' },
    { name: 'スプラシューターコラボ', lc: 'SHOOTER', sc: 'スプラシューター', role: 'BALANCED', range: 'SHORT' },
    { name: 'プライムシューター', lc: 'SHOOTER', sc: 'プライムシューター', role: 'KILL', range: 'MID' },
    { name: 'プライムシューターコラボ', lc: 'SHOOTER', sc: 'プライムシューター', role: 'KILL', range: 'MID' },
    { name: 'イグザミナー', lc: 'SPINNER', sc: 'イグザミナー', role: 'BALANCED', range: 'MID' },
    { name: 'イグザミナーヒュー', lc: 'SPINNER', sc: 'イグザミナー', role: 'BALANCED', range: 'MID' },
    { name: 'ジムワイパー', lc: 'WIPER', sc: 'ジムワイパー', role: 'KILL', range: 'MID' },
    { name: 'ジムワイパーヒュー', lc: 'WIPER', sc: 'ジムワイパー', role: 'BALANCED', range: 'MID' },
    { name: "スクイックリンα", lc: 'CHARGER', sc: 'スクイックリン', role: 'KILL', range: 'MID'},
    { name: "スクイックリンβ", lc: 'CHARGER', sc: 'スクイックリン', role: 'KILL', range: 'MID'},
    { name: 'クーゲルシュライバー', lc: 'SPINNER', sc: 'クーゲルシュライバー', role: 'BALANCED', range: 'LONG' },
    { name: 'クーゲルシュライバーヒュー', lc: 'SPINNER', sc: 'クーゲルシュライバー', role: 'BALANCED', range: 'LONG' },
    { name: 'ハイドラント', lc: 'SPINNER', sc: 'ハイドラント', role: 'KILL', range: 'LONG' },
    { name: 'ハイドラントカスタム', lc: 'SPINNER', sc: 'ハイドラント', role: 'KILL', range: 'LONG' },
    { name: "リッター4K", lc: 'CHARGER', sc: 'リッター4K', role: 'KILL', range: 'LONG'},
    { name: "リッター4Kカスタム", lc: 'CHARGER', sc: 'リッター4K', role: 'KILL', range: 'LONG'}
] as const;

export type Weapon = typeof WEAPON[number];
export type WeaponName = Weapon['name'];
export type WeaponRole = Weapon['role'];
export type WeaponLc = Weapon['lc'];
export type WeaponSc = Weapon['sc'];
export type WeaponRange = Weapon['range'];