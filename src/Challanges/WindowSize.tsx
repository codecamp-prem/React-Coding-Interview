import useWindowSize from "../TipCalculator/useWindowSize";

type Props = {
  size: {
    width: number;
    height: number;
  };
};

function Browser({ size }: Props) {
  return (
    <div
      data-testid="browser"
      className="browser"
      style={{ width: size?.width / 4, height: size?.height / 4 }}
    ></div>
  );
}

const WindowSize = () => {
  const size = useWindowSize();

  return (
    <section>
      <h1>useWindowSize</h1>
      <p>Resize the window</p>
      <table>
        <tbody>
          <tr>
            <th>Width</th>
            <td>{size.width}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{size.height}</td>
          </tr>
        </tbody>
      </table>
      <Browser size={size} />
    </section>
  );
};

export default WindowSize;
