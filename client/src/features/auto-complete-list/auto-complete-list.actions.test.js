import * as actions from './auto-complete-list.actions';
import { AUTO_COMPLETE_LIST_TYPES } from './auto-complete-list.types';

describe('action: toggleAutoComplete', () => {
  it('should return true when receiving true', () => {
    const bool = true;
    const expectedAction = {
      type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
      payload: {
        bool
      }
    }
    expect(actions.toggleAutoComplete(bool)).toEqual(expectedAction)
  });

  it('should return false when receiving false', () => {
    const bool = false;
    const expectedAction = {
      type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
      payload: {
        bool
      }
    }
    expect(actions.toggleAutoComplete(bool)).toEqual(expectedAction)
  });

  it('should not return true when receiving a string', () => {
    const anyString = 'true';
    const bool = true;
    const expectedAction = {
      type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
      payload: {
        bool
      }
    }
    expect(actions.toggleAutoComplete(anyString)).not.toEqual(expectedAction)
  });

  it('should not return false when receiving a string', () => {
    const anyString = 'false';
    const bool = false;
    const expectedAction = {
      type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
      payload: {
        bool
      }
    }
    expect(actions.toggleAutoComplete(anyString)).not.toEqual(expectedAction)
  });

  it('should not return true when receiving a number', () => {
    const anyNumber = 123;
    const bool = true;
    const expectedAction = {
      type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
      payload: {
        bool
      }
    }
    expect(actions.toggleAutoComplete(anyNumber)).not.toEqual(expectedAction)
  });

  it('should not return false when receiving a number', () => {
    const anyNumber = 123;
    const bool = false;
    const expectedAction = {
      type: AUTO_COMPLETE_LIST_TYPES.toggleAutoComplete,
      payload: {
        bool
      }
    }
    expect(actions.toggleAutoComplete(anyNumber)).not.toEqual(expectedAction)
  });
})