import {
  BiBell,
  BiBold,
  BiItalic,
  BiLeftIndent,
  BiLinkAlt,
  BiListOl,
  BiListUl,
  BiRightIndent,
  BiStrikethrough,
  BiUnderline,
} from 'react-icons/bi';

import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components';

import './styles.scss';
import { ToolbarProps } from './types';

const Toolbar: React.FC<ToolbarProps> = ({ onPublish }) => {
  const { palette } = useTheme();

  return (
    <div className="toolbar-container" id="toolbar">
      <span className="ql-formats">
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
      </span>

      <span className="ql-formats">
        <button className="ql-bold">
          <BiBold size={24} color={palette.title} />
        </button>

        <button className="ql-italic">
          <BiItalic size={24} color={palette.title} />
        </button>

        <button className="ql-underline">
          <BiUnderline size={24} color={palette.title} />
        </button>

        <button className="ql-strike">
          <BiStrikethrough size={24} color={palette.title} />
        </button>
      </span>

      <span className="ql-formats">
        <select className="ql-align" />
      </span>

      <span className="ql-formats">
        <button className="ql-list" value="ordered">
          <BiListOl size={24} color={palette.title} />
        </button>

        <button className="ql-list" value="bullet">
          <BiListUl size={24} color={palette.title} />
        </button>

        <button className="ql-indent" value="-1">
          <BiLeftIndent size={24} color={palette.title} />
        </button>

        <button className="ql-indent" value="+1">
          <BiRightIndent size={24} color={palette.title} />
          <BiRightIndent size={24} color={palette.title} />
        </button>
      </span>

      <span className="ql-formats">
        <button className="ql-link">
          <BiLinkAlt size={24} color={palette.title} />
        </button>
      </span>

      <Button
        text="Publicar"
        variant="solid"
        primary
        style={{ color: palette.primary, height: '36px' }}
        RightIcon={() => <BiBell color={palette.primary} size={24} />}
        onClick={onPublish}
      />
    </div>
  );
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'align',
  'strike',
  'script',
  'list',
  'bullet',
  'indent',
  'link',
];

const modules = {
  toolbar: {
    container: '#toolbar',
  },
};

export { Toolbar, formats, modules };
