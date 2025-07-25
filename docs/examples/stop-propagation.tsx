import Trigger from '@rc-component/trigger';
import React from 'react';

const Test = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        不使用stopPropagation
        <Trigger
          popupPlacement="top"
          popup={
            <div style={{ height: 20, width: 200, background: 'red' }}>
              父级弹出层
            </div>
          }
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div style={{ padding: 10, background: '#f0f0f0' }}>
              <div>父级触发器内容</div>
            </div>

            <Trigger
              popupPlacement="top"
              popup={
                <div style={{ height: 20, width: 200, background: 'hotpink' }}>
                  子级弹出层
                </div>
              }
            >
              <div style={{ padding: 10, background: '#aaa' }}>
                子级触发器区域
              </div>
            </Trigger>
          </div>
        </Trigger>
      </div>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          gap: 20,
          alignItems: 'center',
        }}
      >
        使用stopPropagation
        <Trigger
          stopPropagation
          popupPlacement="top"
          popup={
            <div style={{ height: 20, width: 200, background: 'red' }}>
              父级弹出层
            </div>
          }
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div style={{ padding: 10, background: '#f0f0f0' }}>
              <div>父级触发器内容</div>
            </div>

            <Trigger
              stopPropagation
              popupPlacement="top"
              popup={
                <div style={{ height: 20, width: 200, background: 'hotpink' }}>
                  子级弹出层
                </div>
              }
            >
              <div style={{ padding: 10, background: '#aaa' }}>
                子级触发器区域
              </div>
            </Trigger>
          </div>
        </Trigger>
      </div>
    </div>
  );
};

export default Test;
