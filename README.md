# GIT COMMAND
## CLONE
```python 
git clone projectSSH
```

## ADD

- Sau khi project của mình có bất cứ sự thay đổi nào sẽ được thằng git lắng nghe, lúc này nó sẽ đánh giá là project đã thay đổi
- Mình có thể check sự thay đổi bằng lệnh

```python
git status
```

- sau đó add những phai thay đổi vào git bằng lệnh

```python 
git add .
```
- sau khi đã add tất cả sự thay đổi vào git, ta phải commit cái git đó để định danh với câu lệnh

```python 
git commit -am "msg cho commit"
```
- sau khi commit ta `push` commit lên với lệnh

```python
git push
```

- khi ở máy khác, muốn xem thay đổi của `repo` ta dùng lệnh

```python 
git fetch
```
-  sau khi chắc chắn ok, thì ta `pull` về với lệnh

```python
git pull
```
