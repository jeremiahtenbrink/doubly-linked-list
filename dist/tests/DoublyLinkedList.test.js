"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("../DoublyLinkedList");
var LinkedListNode_1 = require("../LinkedListNode");
describe('tests the DoubllyLinkedList class', function () {
    // new DoublyLinkedList for testing
    var dll = null;
    beforeEach(function () {
        // assign a new DoublyLinkedList before each test
        dll = new DoublyLinkedList_1.DoublyLinkedList();
    });
    it("ensure the doubly linked list is created", function () {
        // check the type of dll and that it has all the methods
        expect(dll).toBeInstanceOf(DoublyLinkedList_1.DoublyLinkedList);
        expect(dll).toHaveProperty('addToTail');
        expect(dll).toHaveProperty('addToHead');
        expect(dll).toHaveProperty('removeFromTail');
        expect(dll).toHaveProperty('removeFromHead');
        dll = new DoublyLinkedList_1.DoublyLinkedList('some value');
        expect(dll.head).toBeInstanceOf(LinkedListNode_1.LinkedListNode);
        expect(dll.head.value).toBe('some value');
        expect(dll.tail.value).toBe('some value');
    });
    it('checks add to head method', function () {
        dll.addToHead(30);
        dll.addToHead("someThing");
        dll.addToHead(35);
        expect(dll.head.value).toBe(35);
        expect(dll.head.prev.value).toBe("someThing");
        expect(dll.head.prev.prev.value).toBe(30);
        expect(dll.tail.value).toBe(30);
        expect(dll.tail.next.value).toBe("someThing");
        expect(dll.tail.next.next.value).toBe(35);
    });
    it("checks add to tail method", function () {
        dll.addToTail(30);
        dll.addToTail(45);
        dll.addToTail(50);
        expect(dll.head.value).toBe(30);
        expect(dll.head.prev.value).toBe(45);
        expect(dll.head.prev.prev.value).toBe(50);
        expect(dll.tail.value).toBe(50);
        expect(dll.tail.next.value).toBe(45);
        expect(dll.tail.next.next.value).toBe(30);
    });
    it('checks the remove from head method', function () {
        dll.addToHead(30);
        dll.addToHead(45);
        dll.addToHead(50);
        expect(dll.head.value).toBe(50);
        var value = dll.removeFromHead();
        expect(value).toBe(50);
        expect(dll.head.value).toBe(45);
        value = dll.removeFromHead();
        expect(value).toBe(45);
        value = dll.removeFromHead();
        expect(value).toBe(30);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        value = dll.removeFromHead();
        expect(value).toBeNull();
    });
    it('checks the remove from tail method', function () {
        dll.addToHead(30);
        dll.addToHead(45);
        dll.addToHead(50);
        expect(dll.tail.value).toBe(30);
        var value = dll.removeFromTail();
        expect(value).toBe(30);
        expect(dll.tail.value).toBe(45);
        value = dll.removeFromTail();
        expect(value).toBe(45);
        value = dll.removeFromTail();
        expect(value).toBe(50);
        expect(dll.head).toBe(null);
        expect(dll.tail).toBe(null);
        value = dll.removeFromTail();
        expect(value).toBe(null);
    });
    it('checks the size of the linked list', function () {
        dll.addToHead(35);
        expect(dll.getSize()).toBe(1);
        dll.addToHead(35);
        dll.addToHead(35);
        dll.addToHead(35);
        expect(dll.getSize()).toBe(4);
        dll.removeFromHead();
        expect(dll.getSize()).toBe(3);
        dll.removeFromTail();
        expect(dll.getSize()).toBe(2);
        dll.removeFromHead();
        dll.removeFromHead();
        expect(dll.getSize()).toBe(0);
        dll.removeFromHead();
        expect(dll.getSize()).toBe(0);
        dll.removeFromTail();
        expect(dll.getSize()).toBe(0);
    });
    it('checks the forEach function', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dll.forEach(function (item) {
                    }).catch(function (e) {
                        expect(e.message).toBe("There are no items in this DLL");
                    })];
                case 1:
                    result = _a.sent();
                    dll.addToHead(23);
                    dll.addToHead(24);
                    dll.addToHead(25);
                    items = [];
                    return [4 /*yield*/, dll.forEach((function (item) {
                            items.push(item);
                        }))];
                case 2:
                    result = _a.sent();
                    expect(items.length).toBe(3);
                    expect(items).toContain(23);
                    expect(items).toContain(24);
                    expect(items).toContain(25);
                    expect(result.complete).toBe(true);
                    expect(result.error).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
    it("tests the forSome function", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dll.forSome(function (item) {
                    }).catch(function (e) {
                        expect(e.message).toBe("There are no items in this DLL");
                    })];
                case 1:
                    result = _a.sent();
                    dll.addToHead(23);
                    dll.addToHead(24);
                    dll.addToHead(25);
                    items = [];
                    return [4 /*yield*/, dll.forSome(function (item) {
                            items.push(item);
                            return true;
                        })];
                case 2:
                    result = _a.sent();
                    expect(result.complete).toBe(false);
                    expect(items.length).toBe(1);
                    items = [];
                    return [4 /*yield*/, dll.forSome(function (item) {
                            items.push(item);
                        })];
                case 3:
                    result = _a.sent();
                    expect(result.complete).toBe(true);
                    expect(result.error).toBe(null);
                    expect(items.length).toBe(3);
                    expect(items[0]).toBe(25);
                    expect(items[1]).toBe(24);
                    expect(items[2]).toBe(23);
                    return [2 /*return*/];
            }
        });
    }); });
    it('checks the forEachReverse function', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dll.forEachReverse(function (item) {
                    }).catch(function (e) {
                        expect(e.message).toBe("There are no items in this DLL");
                    })];
                case 1:
                    result = _a.sent();
                    dll.addToHead(23);
                    dll.addToHead(24);
                    dll.addToHead(25);
                    items = [];
                    return [4 /*yield*/, dll.forEachReverse((function (item) {
                            items.push(item);
                        }))];
                case 2:
                    result = _a.sent();
                    expect(items.length).toBe(3);
                    expect(items[0]).toBe(23);
                    expect(items[1]).toBe(24);
                    expect(items[2]).toBe(25);
                    expect(result.complete).toBe(true);
                    expect(result.error).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=DoublyLinkedList.test.js.map