const _0x4546bf = _0x35bc;
(function(_0x289cec, _0x4427ca) {
    const _0x16613a = _0x35bc,
        _0x183d0e = _0x289cec();
    while (!![]) {
        try {
            const _0x2aa742 = parseInt(_0x16613a(0xbf)) / 0x1 * (parseInt(_0x16613a(0xc7)) / 0x2) + parseInt(_0x16613a(0xdf)) / 0x3 * (parseInt(_0x16613a(0xc1)) / 0x4) + parseInt(_0x16613a(0xe3)) / 0x5 * (parseInt(_0x16613a(0xea)) / 0x6) + parseInt(_0x16613a(0xc6)) / 0x7 + parseInt(_0x16613a(0xca)) / 0x8 + parseInt(_0x16613a(0xdd)) / 0x9 * (parseInt(_0x16613a(0xd4)) / 0xa) + -parseInt(_0x16613a(0xe4)) / 0xb * (parseInt(_0x16613a(0xd6)) / 0xc);
            if (_0x2aa742 === _0x4427ca) break;
            else _0x183d0e['push'](_0x183d0e['shift']());
        } catch (_0x28b92b) {
            _0x183d0e['push'](_0x183d0e['shift']());
        }
    }
}(_0x5027, 0x889e4));
const noteEl = document['querySelector'](_0x4546bf(0xd9)),
    editbtn = document[_0x4546bf(0xeb)]('.edit'),
    deletebtn = document[_0x4546bf(0xeb)](_0x4546bf(0xcf)),
    main = noteEl[_0x4546bf(0xeb)](_0x4546bf(0xc2)),
    textArea = noteEl[_0x4546bf(0xeb)](_0x4546bf(0xbe)),
    notes = JSON[_0x4546bf(0xb8)](localStorage[_0x4546bf(0xec)](_0x4546bf(0xc4)));
let clicked = 0x0;
notes && notes[_0x4546bf(0xdc)](_0x4a25b0 => {
    addnewnote(_0x4a25b0);
});

function _0x5027() {
    const _0x1589ae = ['setItem', 'length', '4002288uySShv', 'value', 'appendChild', 'body', 'You\x20need\x20atleast\x20one\x20note', '.delete', 'Copied\x20to\x20Clipboard', 'Oops!', 'innerHTML', 'deleted', '52410FcKVEy', 'I\x20understand', '44677440yKvrEX', 'createElement', 'fire', '.notes', 'click', 'Error!', 'forEach', '1809mQoltM', 'warning', '687newqWU', 'error', 'disabled', 'You\x20can\x20only\x20add\x208\x20notes', '57170gnXKwz', '11DvBqHb', 'select', 'execCommand', 'stringify', 'remove', 'addEventListener', '330LnOAUp', 'querySelector', 'getItem', '.tools', 'copy', 'parse', 'Success!', 'classList', 'success', 'Add\x20some\x20text\x20to\x20copy', 'OKAY', 'textarea', '219673HygCRR', '.edit', '15296FevmOT', '.main', 'toggle', 'notes', 'add', '7033194jjtMfC', '2PkqZlp'];
    _0x5027 = function() {
        return _0x1589ae;
    };
    return _0x5027();
}
editbtn['addEventListener'](_0x4546bf(0xda), _0x236698 => {
    const _0x2b9913 = _0x4546bf;
    main[_0x2b9913(0xba)]['toggle'](_0x2b9913(0xe1)), textArea[_0x2b9913(0xba)][_0x2b9913(0xc3)](_0x2b9913(0xe1)), addToLocalStorage();
}), deletebtn[_0x4546bf(0xe9)]('click', _0x1f1d2e => {
    const _0x200be6 = _0x4546bf;
    if (clicked < 0x2) return Swal['fire']({
        'title': _0x200be6(0xdb),
        'text': _0x200be6(0xce),
        'icon': 'error',
        'confirmButtonText': 'I\x20understand'
    });
    deletebtn[_0x200be6(0xba)]['toggle']('disabled'), setTimeout(() => {
        const _0x28cf33 = _0x200be6;
        noteEl[_0x28cf33(0xe8)](), addToLocalStorage(), clicked--;
    }, 0x15e);
});
const copybtn = document[_0x4546bf(0xeb)]('.copy');

function _0x35bc(_0x5b1658, _0x5b95c3) {
    const _0x50273b = _0x5027();
    return _0x35bc = function(_0x35bcb6, _0x3e4646) {
        _0x35bcb6 = _0x35bcb6 - 0xb8;
        let _0x3f7c57 = _0x50273b[_0x35bcb6];
        return _0x3f7c57;
    }, _0x35bc(_0x5b1658, _0x5b95c3);
}
copybtn[_0x4546bf(0xe9)](_0x4546bf(0xda), _0x3cad19 => {
    const _0x22c0f6 = _0x4546bf;
    textArea['select']();
    if (textArea[_0x22c0f6(0xcb)][_0x22c0f6(0xc9)] < 0x1) return Swal[_0x22c0f6(0xd8)]({
        'title': 'Error!',
        'text': 'Add\x20some\x20text\x20to\x20copy',
        'icon': _0x22c0f6(0xe0),
        'confirmButtonText': _0x22c0f6(0xd5)
    });
    document[_0x22c0f6(0xe6)](_0x22c0f6(0xee)), Swal[_0x22c0f6(0xd8)]({
        'title': _0x22c0f6(0xb9),
        'text': _0x22c0f6(0xd0),
        'icon': 'success',
        'confirmButtonText': _0x22c0f6(0xbd)
    });
});
const addBtn = document['getElementById'](_0x4546bf(0xc5));
addBtn[_0x4546bf(0xe9)](_0x4546bf(0xda), _0xbbb5a9 => {
    addnewnote();
});

function addnewnote(_0x454c47 = '') {
    const _0x2a0d2 = _0x4546bf;
    if (clicked > 0x6) return Swal[_0x2a0d2(0xd8)]({
        'title': _0x2a0d2(0xd1),
        'text': _0x2a0d2(0xe2),
        'icon': _0x2a0d2(0xde),
        'confirmButtonText': _0x2a0d2(0xbd)
    });
    clicked++;
    const _0x363212 = document[_0x2a0d2(0xd7)]('div');
    _0x363212[_0x2a0d2(0xba)]['add'](_0x2a0d2(0xc4)), _0x363212[_0x2a0d2(0xd2)] = '\x0a\x20\x20\x20\x20<div\x20class=\x22tools\x22>\x0a\x0a\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20maxlength=\x2215\x22\x20type=\x22text\x22\x20value=\x22Note\x20name\x22\x20class=\x22input\x22>\x0a\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20<button\x20class=\x22copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa-solid\x20fa-copy\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20<button\x20class=\x22edit\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-edit\x22></i>\x0a\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20<button\x20class=\x22delete\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa-solid\x20fa-xmark\x22></i>\x0a\x20\x20\x20\x20</button>\x0a</div>\x0a\x0a<div\x20class=\x22main\x20disabled\x22></div>\x0a<textarea\x20class=\x22disabled\x22\x20placeholder=\x22Type\x20your\x20notes,\x20wishes\x20and\x20your\x20favirot\x20story.\x22></textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', document[_0x2a0d2(0xcd)][_0x2a0d2(0xcc)](_0x363212);
    const _0x151700 = _0x363212[_0x2a0d2(0xeb)](_0x2a0d2(0xc0)),
        _0x1c13e9 = _0x363212[_0x2a0d2(0xeb)]('.delete'),
        _0x5f0fb5 = _0x363212[_0x2a0d2(0xeb)]('.copy'),
        _0x2edc47 = _0x363212[_0x2a0d2(0xeb)](_0x2a0d2(0xc2)),
        _0x21b824 = _0x363212[_0x2a0d2(0xeb)](_0x2a0d2(0xed)),
        _0x4799cf = _0x363212[_0x2a0d2(0xeb)]('textarea');
    _0x4799cf['value'] = _0x454c47, _0x151700[_0x2a0d2(0xe9)]('click', _0x54debe => {
        const _0x2a486c = _0x2a0d2;
        _0x2edc47[_0x2a486c(0xba)][_0x2a486c(0xc3)](_0x2a486c(0xe1)), _0x4799cf[_0x2a486c(0xba)][_0x2a486c(0xc3)](_0x2a486c(0xe1)), addToLocalStorage();
    }), _0x1c13e9['addEventListener'](_0x2a0d2(0xda), _0x45a47b => {
        const _0x59b221 = _0x2a0d2;
        if (clicked < 0x1) return Swal[_0x59b221(0xd8)]({
            'title': _0x59b221(0xdb),
            'text': 'You\x20need\x20atleast\x20one\x20note',
            'icon': _0x59b221(0xe0),
            'confirmButtonText': _0x59b221(0xd5)
        });
        _0x21b824['classList'][_0x59b221(0xc3)](_0x59b221(0xd3)), _0x363212[_0x59b221(0xba)][_0x59b221(0xc3)](_0x59b221(0xd3)), _0x1c13e9['classList']['toggle'](_0x59b221(0xe1)), setTimeout(() => {
            _0x363212['remove'](), addToLocalStorage(), clicked--;
        }, 0x15e);
    }), _0x5f0fb5[_0x2a0d2(0xe9)]('click', _0x5300b1 => {
        const _0x42d4f1 = _0x2a0d2;
        _0x4799cf[_0x42d4f1(0xe5)]();
        if (_0x4799cf[_0x42d4f1(0xcb)][_0x42d4f1(0xc9)] < 0x1) return Swal['fire']({
            'title': _0x42d4f1(0xdb),
            'text': _0x42d4f1(0xbc),
            'icon': _0x42d4f1(0xe0),
            'confirmButtonText': _0x42d4f1(0xd5)
        });
        document['execCommand'](_0x42d4f1(0xee)), Swal[_0x42d4f1(0xd8)]({
            'title': 'Success!',
            'text': 'Copied\x20to\x20Clipboard',
            'icon': _0x42d4f1(0xbb),
            'confirmButtonText': _0x42d4f1(0xbd)
        });
    });
}

function addToLocalStorage() {
    const _0x527e30 = _0x4546bf,
        _0x43df9c = document['querySelectorAll'](_0x527e30(0xbe)),
        _0x42ed35 = [];
    _0x43df9c[_0x527e30(0xdc)](_0xc0dbcb => {
        const _0x485dca = _0x527e30;
        _0xc0dbcb[_0x485dca(0xcb)][_0x485dca(0xc9)] > 0x0 && _0x42ed35['push'](_0xc0dbcb[_0x485dca(0xcb)]);
    }), localStorage[_0x527e30(0xc8)](_0x527e30(0xc4), JSON[_0x527e30(0xe7)](_0x42ed35));
}