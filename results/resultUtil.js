export function scoreHp(hp) {
    if (hp <= 1) {
        return 'dead';
    }
    if (hp < 7) {
        return 'ok';
    }
    if (hp >= 7) {
        return 'excellent';
    }
}

export function scoreGold(gold) {
    if (gold <= 2) {
        return 'broke';
    }
    if (gold <= 7) {
        return 'ok';
    }
    return 'wealthy';
}