#!/usr/bin/env node

import { getAnswer } from '../games/commonFunction';
import { brainEvent } from '..';

const name = getAnswer('What is your name? ');
brainEvent(name);
