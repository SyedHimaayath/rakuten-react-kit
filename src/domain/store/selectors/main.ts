/**
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the * LICENSE file in the root directory of this source tree.
 */

import { store } from 'domain/store/main';
import { State, Item } from 'domain/store/main';

export function state(): State {
  return store.deref();
}

export function allItems(): Array<Item> {
  return state().allItems;
}